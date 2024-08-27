import React from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaSearch,
} from "react-icons/fa";

const CarBooking = () => {
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
      <div className="relative -mt-24 max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {/* Pickup Location */}
          <div className="flex flex-col lg:col-span-2">
            <label className="font-semibold mb-2">Pickup Location</label>
            <div className="relative">
              <select className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option value="">Select Location</option>
                <option value="city1">New York City, NY</option>
                <option value="city2">Los Angeles, CA</option>
                <option value="city3">Chicago, IL</option>
                <option value="city4">Houston, TX</option>
                <option value="city5">Miami, FL</option>
              </select>
              <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Pickup Date */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2">Pickup Date</label>
            <div className="relative">
              <input
                type="date"
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Pickup Time */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2">Pickup Time</label>
            <div className="relative">
              <input
                type="time"
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <FaClock className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Return Date */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2">Return Date</label>
            <div className="relative">
              <input
                type="date"
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Return Time */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2">Return Time</label>
            <div className="relative">
              <input
                type="time"
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <FaClock className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
            >
              <FaSearch className="inline-block mr-2" /> Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarBooking;
