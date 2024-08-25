import carBanner from "../../assets/Luxury-Car-PNG-HD.png";
import CarCard from "./CarCard";
import FilterCard from "./FilterCard";

const CarList = () => {
  const cars = [
    {
      id: 1, // Added id for key prop
      image: "car1.jpg",
      title: "Delux",
      price: "$68",
      description:
        "Great explorer of the truth, the master-builder of human happiness.",
    },
    {
      id: 2,
      image: "car2.jpg",
      title: "Economy",
      price: "$58",
      description:
        "Great explorer of the truth, the master-builder of human happiness.",
    },
    {
      id: 3,
      image: "car3.jpg",
      title: "Economy",
      price: "$20",
      description:
        "Great explorer of the truth, the master-builder of human happiness.",
    },
    // ... other cars
  ];

  return (
    <>
      <div className="py-12 bg-teal-400">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0C0B0B]">
                Car Listing
              </h2>
            </div>
            <div className="flex-1">
              <img className="w-full h-auto" src={carBanner} alt="Car" />
            </div>
          </div>
        </div>
      </div>
      <div className="container gap-4 mx-auto flex flex-col md:flex-row justify-around mt-20 px-4">
        <div
          style={{ background: "#EFF2F4" }}
          className="rounded-md w-full md:w-80 p-4 mb-4 md:mb-0"
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
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarList;
