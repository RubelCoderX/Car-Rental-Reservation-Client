import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import car1 from "../../assets/car-1.avif";
import car2 from "../../assets/car-2.avif";
import car3 from "../../assets/car-6.avif";
import car4 from "../../assets/car-4.avif";

const CarDetailsCard = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row justify-evenly items-center my-10 p-4">
      {/* Left side - Image/Slider */}
      <div className="lg:w-1/2 w-full flex justify-center">
        <Carousel
          //   autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showThumbs={true}
          showStatus={false}
        >
          <div>
            <img src={car1} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={car2} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={car3} />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src={car4} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>

      {/* Right side - Description */}
      <div className="lg:w-1/2 w-full lg:pl-10 mt-8 lg:mt-0">
        <div className="text-green-600 text-3xl font-bold mb-4">
          $5.00 / Hour
        </div>
        <p className="text-gray-600 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <ul className="text-gray-800 space-y-2">
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
        </ul>
      </div>
    </div>
  );
};

export default CarDetailsCard;
