import carBanner from "../../assets/Luxury-Car-PNG-HD.png";
import CarCard from "./CarCard";
import FilterCard from "./FilterCard";

const CarList = () => {
  const cars = [
    {
      image: "car1.jpg",
      title: "Delux",
      price: "$68",
      description:
        "Great explorer of the truth, the master-builder of human happiness.",
    },
    {
      image: "car2.jpg",
      title: "Economy",
      price: "$58",
      description:
        "Great explorer of the truth, the master-builder of human happiness.",
    },
    {
      image: "car3.jpg",
      title: "Economy",
      price: "$20",
      description:
        "Great explorer of the truth, the master-builder of human happiness.",
    },
    {
      image: "car3.jpg",
      title: "Economy",
      price: "$20",
      description:
        "Great explorer of the truth, the master-builder of human happiness.",
    },
    {
      image: "car3.jpg",
      title: "Economy",
      price: "$20",
      description:
        "Great explorer of the truth, the master-builder of human happiness.",
    },
    {
      image: "car3.jpg", // Replace with actual image path
      title: "Economy",
      price: "$20",
      description:
        "Great explorer of the truth, the master-builder of human happiness.",
    },
    {
      image: "car3.jpg", // Replace with actual image path
      title: "Economy",
      price: "$20",
      description:
        "Great explorer of the truth, the master-builder of human happiness.",
    },
  ];

  return (
    <>
      <div className="py-10 bg-teal-400">
        <div className="container mx-auto">
          <div className="flex items-center justify-between w-full ">
            <div className="flex-1">
              <h2 className="text-5xl font-bold text-white pl-10">
                Car Listing
              </h2>
            </div>
            <div className="flex-1">
              <img className="w-full h-auto" src={carBanner} alt="Car" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-around mt-20">
        <div className="bg-gray-400 w-80 p-5">
          <FilterCard />
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
