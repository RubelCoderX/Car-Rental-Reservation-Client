import moment from "moment";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { carApi } from "../../redux/features/Car/carApi";
import FeaturedCarCard from "../FeaturedCar/FeaturedCarCard";
import Loader from "../../shared/Loader/Loader";

const CarBooking = () => {
  const [carSearch] = carApi.useSearchCarsMutation();
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noCarsMessage, setNoCarsMessage] = useState("");

  const pickUpDate = moment(startDate).format("DD/MM/YYYY");
  const pickUpTime = moment(startDate).format("HH:mm");
  const dropOffDate = moment(endDate).format("DD/MM/YYYY");
  const dropOffTime = moment(endDate).format("HH:mm");

  const minTime = moment().toDate();
  const maxTime = moment().endOf("day").toDate();

  const handleCarSearch = async () => {
    setLoading(true);
    setNoCarsMessage("");

    const data = {
      location,
      pickUpDate,
      pickUpTime,
      dropOffDate,
      dropOffTime,
    };

    try {
      const res = await carSearch(data);
      if (res.data.success) {
        setCars(res.data.data);
        if (res.data.data.length === 0) {
          setNoCarsMessage(
            "No cars available for the selected dates & location."
          );
        }
      } else {
        setNoCarsMessage("Failed to fetch cars. Please try again.");
      }
    } catch (error) {
      setNoCarsMessage("An error Fatching while searching for cars.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="relative h-[300px] md:h-[500px] w-full">
        <div
          style={{
            backgroundImage: "url('https://i.ibb.co/T8Wy3z9/bookings.jpg')",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="relative -mt-24 max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
          {/* Pickup Location */}
          <div className="lg:col-span-2 flex flex-col">
            <label className="font-semibold mb-2">Pickup Location</label>
            <div className="relative">
              <select
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Select Location</option>
                <option value="Las Vegas, NV">Las Vegas, NV</option>
                <option value="Los Angeles, CA">Los Angeles, CA</option>
                <option value="Chicago, IL">Chicago, IL</option>
                <option value="New York, NY">New York, NY</option>
                <option value="Miami, FL">Miami, FL</option>
                <option value="Miami">Miami</option>
              </select>
              <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Pickup Date & Time */}
          <div className="lg:col-span-2 flex flex-col">
            <label className="font-semibold mb-2">Pick-up Date & Time</label>
            <DatePicker
              className="bg-white border text-gray-900 text-sm rounded-md w-full p-2.5 shadow-lg"
              selected={startDate}
              onChange={(date) => setStartDate(date as Date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="dd/MM/yyyy HH:mm"
              minDate={new Date()}
              minTime={
                startDate && moment().isSame(startDate, "day")
                  ? minTime
                  : undefined
              }
              maxTime={
                startDate && moment().isSame(startDate, "day")
                  ? maxTime
                  : undefined
              }
            />
          </div>

          {/* Return Date & Time */}
          <div className="lg:col-span-2 flex flex-col">
            <label className="font-semibold mb-2">Drop-off Date & Time</label>
            <DatePicker
              className="bg-white border text-gray-900 text-sm rounded-md w-full p-2.5 shadow-lg"
              selected={endDate}
              onChange={(date) => setEndDate(date as Date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="dd/MM/yyyy HH:mm"
              minDate={new Date()} // Prevent past dates
              minTime={
                startDate && moment().isSame(startDate, "day")
                  ? moment().toDate()
                  : undefined
              }
              maxTime={
                startDate && moment().isSame(startDate, "day")
                  ? moment().endOf("day").toDate()
                  : undefined
              }
            />
          </div>

          {/* Search Button */}
          <div className="flex items-end lg:col-span-2">
            <button
              onClick={handleCarSearch}
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
              disabled={loading}
            >
              <FaSearch className="inline-block mr-2" />
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>
      </div>
      {/* Car Cards or No Cars Message */}
      <div className="container mx-auto mt-20">
        {loading ? (
          <Loader />
        ) : noCarsMessage ? (
          <div className="text-center text-2xl font-semibold text-red-500 max-w-3xl mx-auto bg-slate-300 rounded-md p-4">
            {noCarsMessage}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {cars.map((car) => (
              <FeaturedCarCard key={car._id} car={car} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarBooking;
