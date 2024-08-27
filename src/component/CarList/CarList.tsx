import { carApi } from "../../redux/features/Car/carApi";
import FeaturedCarCard from "../FeaturedCar/FeaturedCarCard";
import FilterCard from "./FilterCard";

const CarList = () => {
  const { data: getCars } = carApi.useGetAllCarsQuery(undefined);

  const carData = getCars?.data;
  return (
    <>
      <div className="relative h-[300px] md:h-[500px] w-full">
        <div
          style={{
            backgroundImage: "url('https://i.ibb.co/9v9k4gQ/carlist.jpg')",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
        </div>
      </div>
      <div className="container gap-4 mx-auto flex flex-col md:flex-row  justify-around mt-20 px-4">
        <div
          style={{ background: "#EFF2F4" }}
          className="rounded-md w-full md:w-80  p-4 mb-4 md:mb-0"
        >
          <FilterCard />
        </div>
        <div className="">
          <div
            style={{ background: "#EFF2F4" }}
            className="mb-10 p-4 rounded-lg"
          >
            <input
              id="search"
              type="search"
              placeholder="Search Here..."
              className="p-4 border rounded-md w-full bg-white shadow-lg"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
            {carData?.map((car) => (
              <FeaturedCarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarList;
