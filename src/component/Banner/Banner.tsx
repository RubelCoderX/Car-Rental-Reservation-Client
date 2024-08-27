import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import car1 from "../../assets/bann1.jpg";
import car2 from "../../assets/banner2.jpg";
import car3 from "../../assets/banner3.jpg";
import car4 from "../../assets/banner4.jpg";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero-section relative">
      <Carousel
        className="main-slide"
        // autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src={car1} className="h-[900px]" alt="Affordable car rentals" />
          <div className="slide-content absolute inset-0 flex flex-col justify-center items-start text-left p-4 md:p-8 lg:p-16">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold leading-tight mb-4 text-black">
              We offer the best prices{" "}
              <span className="text-red-500">in town</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-4">
              Drive away with unbeatable deals on top-rated vehicles.
            </p>
            <Link to="/book" className="mt-4">
              <button className="border border-red-500 border-b-2 bg-black text-white hover:border-b-2 hover:border-b-white hover:text-white py-2 px-4 md:px-6 rounded-md hover:bg-red-500 hover:text-primary transition duration-300">
                Book Now
              </button>
            </Link>
          </div>
        </div>

        <div>
          <img src={car2} className="h-[900px]" alt="Wide selection of cars" />
          <div className="slide-content absolute inset-0 flex flex-col justify-center items-start text-left p-4 md:p-8 lg:p-16">
            <h1 className="text-xl md:text-3xl lg:text-5xl  font-bold leading-tight mb-4 text-white">
              Wide Range of <span className="text-red-500">Vehicles</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-500 mb-4">
              From compact cars to luxury SUVs, we have the perfect <br /> ride
              for every journey.
            </p>
            <Link to="/fleet" className="mt-4">
              <button className="border border-white bg-black text-white hover:text-black py-2 px-4 md:px-6 rounded-md hover:bg-white hover:text-primary transition duration-300">
                Explore Our Fleet
              </button>
            </Link>
          </div>
        </div>

        <div>
          <img
            src="https://i.postimg.cc/bNFJ59zc/banner4.jpg"
            className="h-[900px]"
            alt="Flexible rental options"
          />
          <div className="slide-content absolute inset-0 flex flex-col justify-center items-start text-left p-4 md:p-8 lg:p-16">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold leading-tight mb-4 text-white">
              Flexible Rental <span className="text-red-500"> Plans</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white mb-4">
              Rent by the day, week, or month – the choice is yours.
            </p>
            <Link to="/plans" className="mt-4">
              <button className="border border-white bg-black text-white hover:text-black py-2 px-4 md:px-6 rounded-md hover:bg-white hover:text-primary transition duration-300">
                Choose Your Plan
              </button>
            </Link>
          </div>
        </div>

        <div>
          <img src={car4} className="h-[900px]" alt="24/7 customer support" />
          <div className="slide-content absolute inset-0 flex flex-col justify-center items-start text-left p-4 md:p-8 lg:p-16">
            <h1 className="text-xl md:text-3xl lg:text-5xl  font-bold leading-tighttext-white">
              24/7 Customer <span className="text-red-500">Support</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-black mb-4 mt-8">
              We're here for you anytime, anywhere. Your satisfaction
              <br /> is our priority.
            </p>
            <Link to="/support" className="">
              <button className="border border-white bg-black text-white hover:text-black py-2 px-4 md:px-6 rounded-md hover:bg-white hover:text-primary transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
