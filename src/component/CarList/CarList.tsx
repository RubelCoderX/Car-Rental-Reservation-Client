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
      <div className="relative h-[300px] md:h-[500px] w-full">
        <div
          style={{
            backgroundImage:
              "url('https://i.ibb.co/4KG2J3n/Car-Banner-List.png')",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
        </div>
        {/* <div className="relative container mx-auto flex flex-col md:flex-row justify-between items-end h-full px-4 pb-8">
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mt-10 font-bold text-white">
              BMW 7 Series
            </h1>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="bg-red-500 text-white px-4 py-2 hover:bg-red-600 transition rounded-md">
              Book Now
            </button>
          </div>
        </div> */}
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
