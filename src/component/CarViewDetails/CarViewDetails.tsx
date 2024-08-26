import CarDetailsCard from "./CarDetailsCard";
import CarInformation from "./CarInformation";

const CarViewDetails = () => {
  return (
    <div>
      <div className="relative h-[300px] md:h-[700px] w-full">
        <div
          style={{
            backgroundImage: "url('https://i.ibb.co/GCbYCyH/detailspage.png')",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
        </div>
        <div className="relative container mx-auto flex flex-col md:flex-row justify-between items-end h-full px-4 pb-8">
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
        </div>
      </div>
      <CarDetailsCard />
      <CarInformation />
    </div>
  );
};

export default CarViewDetails;
