import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Stars from "../../shared/Starts/Starts";

const CarDetailsCard = ({ carDetails }) => {
  const star = carDetails?.ratings;
  return (
    <div className="container mx-auto flex flex-col lg:flex-row justify-evenly items-center my-10 p-4">
      {/* Left side - Image/Slider */}
      <div className="lg:w-1/2 w-full flex justify-center">
        <Carousel
          interval={2000}
          // autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
        >
          {carDetails?.carImgUrl.map((imgUrl, index) => (
            <div key={index}>
              <img
                className="rounded-md object-cover w-full h-64 sm:h-80 md:h-96"
                src={imgUrl}
                alt={`Car Image ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Right side - Description */}
      <div className="lg:w-1/2 w-full lg:pl-10 mt-8 lg:mt-0">
        <div>
          <Stars star={star} />
        </div>
        <div className="text-black text-3xl font-bold mb-4">
          {carDetails?.pricePerHour}$
          <span className="text-red-500"> / Per Hour</span>
        </div>
        <p className="text-gray-600 mb-6 text-justify">
          {carDetails?.description}
        </p>
        {/* <ul className="text-gray-800 space-y-2">
          <li>
            <strong>Motor year:</strong> 2015
          </li>
          <li>
            <strong>Fuel usage:</strong> 3 l/100 km
          </li>
          <li>
            <strong>Engine capacity:</strong> 999 ccm
          </li>
          <li>
            <strong>Mileage:</strong> 25,000 Km
          </li>
          <li>
            <strong>Max Seats:</strong> 2 seats
          </li>
          <li>
            <strong>Torque:</strong> 5,000 rpm
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default CarDetailsCard;
