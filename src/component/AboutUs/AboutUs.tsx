import { FaCircleDollarToSlot, FaFacebook, FaInstagram } from "react-icons/fa6";
import car from "../../assets/about-us-2.jpg";
import { GiCarWheel } from "react-icons/gi";
import carIcon from "../../assets/car-icon.png";
import carRight from "../../assets/car-right.png";
import worker from "../../assets/worker.png";
import newCar from "../../assets/new-car.png";
import carIns from "../../assets/car-insurance.png";
import { MdAddCall } from "react-icons/md";
import man1 from "../../assets/team/man1.jpg";
import man2 from "../../assets/team/women1.avif";
import man3 from "../../assets/team/women1.jpg";
import man4 from "../../assets/team/rubel_princ.png";
import { LiaLinkedin } from "react-icons/lia";

const AboutUs = () => {
  return (
    <div>
      {/* Background Section */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            src={car}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
        </div>
        <div className="relative container mx-auto flex justify-center items-center h-full px-4">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            About Us
          </h1>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-100 container mx-auto p-6 md:p-12 grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white text-center p-6 md:p-10 shadow-md">
          <FaCircleDollarToSlot className="text-5xl mx-auto text-teal-600 mb-4" />
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Easy Financing
          </h2>
          <p className="text-gray-600">
            Our flexible financing options make it easy for you to get behind
            the wheel of your dream car. Enjoy low rates and hassle-free
            approval.
          </p>
        </div>

        <div className="bg-teal-800 text-center p-6 md:p-10 shadow-md">
          <GiCarWheel className="text-5xl text-white mx-auto mb-4" />
          <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
            All Brands Cars
          </h2>
          <p className="text-gray-200">
            Whether you're looking for a luxury vehicle or a practical family
            car, we offer a wide range of brands and models to suit your needs.
          </p>
        </div>

        <div className="bg-white text-center p-6 md:p-10 shadow-md">
          <img
            src={carIcon}
            className="w-12 h-12 mx-auto mb-4"
            alt="Car Icon"
          />
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Quality Services
          </h2>
          <p className="text-gray-600">
            Our commitment to quality ensures that you receive the best service
            possible. From our experienced team to our rigorous standards, we
            prioritize your satisfaction.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <span className="font-semibold px-4">
            FIND YOUR NEXT CAR WITH EASE
          </span>
          <h4 className="text-4xl font-bold mt-2 px-4">
            Welcome to <span className="text-red-700">Drive Lux</span>
          </h4>
          <div>
            <p className="mt-10 px-4">
              At Drive Lux, we are dedicated to providing you with a seamless
              car buying experience. Our extensive inventory, competitive
              pricing, and exceptional customer service set us apart in the
              industry.
            </p>
            <p className="mt-10 px-4">
              From the moment you step into our showroom or visit our website,
              you'll find a team ready to assist you in finding the perfect
              vehicle to match your lifestyle and preferences.
            </p>
          </div>
          <div className="flex justify-evenly items-center p-6 text-center">
            <div>
              <span>
                <img
                  src={newCar}
                  className="w-12 h-12 mx-auto mb-4"
                  alt="New Car"
                />
              </span>
              <h2 className="font-semibold">Competitive Prices</h2>
            </div>
            <div>
              <span>
                <img
                  src={carIns}
                  className="w-12 h-12 mx-auto mb-4"
                  alt="Car Insurance"
                />
              </span>
              <h2 className="font-semibold">Comprehensive Insurance</h2>
            </div>
            <div>
              <span>
                <img
                  src={worker}
                  className="w-12 h-12 mx-auto mb-4"
                  alt="Safety Checks"
                />
              </span>
              <h2 className="font-semibold">Thorough Safety Checks</h2>
            </div>
          </div>
        </div>
        <div>
          <img src={carRight} alt="Car Display" />
        </div>
      </div>

      {/* Call to Action Section */}
      <div style={{ background: "#253241" }} className="p-6 md:p-10 mt-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-white text-2xl md:text-4xl font-semibold">
              Book Your Free Car Inspection
            </h2>
            <p className="text-white text-sm md:text-base">
              Schedule your complimentary inspection today and ensure your
              vehicle is in top condition. Our experts are here to provide you
              with the best service possible.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-end items-center space-y-4 md:space-y-0 md:space-x-8">
            <button className="bg-red-600 text-white px-4 py-2 hover:bg-red-700 transition">
              GET STARTED
            </button>
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm md:text-base">
                Call Us to Book Your Inspection
              </p>
              <span className="flex justify-center md:justify-start items-center text-white">
                <MdAddCall className="mr-2" />
                <p className="text-base">+1 (755) 302-8549</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Meet our Team */}
      <div className="container mx-auto text-center mt-20 px-4">
        <p className="text-gray-600 text-sm md:text-base">
          HELPS YOU TO FIND THE PERFECT CAR
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">
          Meet our <span className="text-red-700">Sales Team</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={man4}
              className="w-40 h-40 mx-auto rounded-full border border-gray-200"
              alt="Prince Rubel"
            />
            <h3 className="text-xl font-semibold mt-4">Prince Rubel</h3>
            <p className="text-gray-600">Director</p>
            <div className="flex justify-center mt-4 space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-700">
                <LiaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={man1}
              className="w-40 h-40 mx-auto rounded-full border border-gray-200"
              alt="Diago Johnson"
            />
            <h3 className="text-xl font-semibold mt-4">Diago Johnson</h3>
            <p className="text-gray-600">Sales Manager</p>
            <div className="flex justify-center mt-4 space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-700">
                <LiaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={man2}
              className="w-40 h-40 mx-auto rounded-full border border-gray-200"
              alt="Sophia Lauren"
            />
            <h3 className="text-xl font-semibold mt-4">Sophia Lauren</h3>
            <p className="text-gray-600">Co-Founder</p>
            <div className="flex justify-center mt-4 space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-700">
                <LiaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={man3}
              className="w-40 h-40 mx-auto rounded-full border border-gray-200"
              alt="Inaya"
            />
            <h3 className="text-xl font-semibold mt-4">Inaya</h3>
            <p className="text-gray-600">Marketing</p>
            <div className="flex justify-center mt-4 space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-700">
                <LiaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
