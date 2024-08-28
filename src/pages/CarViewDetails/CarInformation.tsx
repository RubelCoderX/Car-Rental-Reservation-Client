import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  FaCogs,
  FaTachometerAlt,
  FaHorse,
  FaExchangeAlt,
  FaGasPump,
} from "react-icons/fa";
import ReturnPolicy from "./ReturnPolicy";
import "./CarInformation.css";

const CarInformation = ({ carDetails }) => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="w-full">
        <Tabs>
          <TabList className="flex flex-wrap justify-center sm:justify-start mb-5 border-b border-gray-200">
            {[
              "Vehicle Specifications",
              "Features & Options",
              "Description",
              "Reviews",
            ].map((tab, index) => (
              <Tab
                key={index}
                className="cursor-pointer px-4 py-2 text-center w-full sm:w-auto hover:bg-gray-100 transition"
              >
                {tab}
              </Tab>
            ))}
          </TabList>

          <TabPanel>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-800 mb-6">
                Vehicle Specifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {carDetails?.vehicleSpecification
                  ?.slice(0, 5)
                  .map((spec, index) => (
                    <div key={index} className="flex items-center">
                      <i className="text-red-500 mr-2">
                        {index === 0 && <FaCogs />}
                        {index === 1 && <FaTachometerAlt />}
                        {index === 2 && <FaHorse />}
                        {index === 3 && <FaExchangeAlt />}
                        {index === 4 && <FaGasPump />}
                      </i>
                      <h3 className="text-lg font-medium text-gray-700">
                        <span className="font-normal">{spec}</span>
                      </h3>
                    </div>
                  ))}
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-800 mb-6">
                Features & Options
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {carDetails?.features?.slice(0, 5).map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <i className="text-red-500 mr-2">
                      {index === 0 && <FaCogs />}
                      {index === 1 && <FaTachometerAlt />}
                      {index === 2 && <FaHorse />}
                      {index === 3 && <FaExchangeAlt />}
                      {index === 4 && <FaGasPump />}
                    </i>
                    <h3 className="text-lg font-medium text-gray-700">
                      <span className="font-normal">{feature}</span>
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Description
            </h2>
            <p className="text-justify">{carDetails?.description}</p>
          </TabPanel>

          <TabPanel>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Leave a <span className="text-red-600">Comment</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name..."
                className="p-4 border rounded-md w-full bg-white shadow-lg"
              />
              <input
                type="number"
                placeholder="Your Ratings"
                className="p-4 border rounded-md w-full bg-white shadow-lg"
              />
            </div>
            <textarea
              placeholder="Enter Your Comment..."
              className="p-4 border rounded-md w-full bg-white shadow-lg mt-6"
            />
            <button className="bg-red-500 text-white px-4 py-2 hover:bg-red-600 transition rounded-md mt-4">
              Post Comment
            </button>
          </TabPanel>
        </Tabs>
      </div>

      <div>
        <ReturnPolicy />
      </div>
    </div>
  );
};

export default CarInformation;
