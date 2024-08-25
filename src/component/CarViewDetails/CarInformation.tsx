import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./CarInformation.css";

const CarInformation = () => {
  return (
    <div className="container mx-auto p-4">
      <Tabs>
        <TabList className="flex flex-wrap justify-center sm:justify-start mb-5 border-b border-gray-200">
          <Tab className="cursor-pointer px-4 py-2 text-center w-full sm:w-auto hover:bg-gray-100 transition">
            Vehicle Specifications
          </Tab>
          <Tab className="cursor-pointer px-4 py-2 text-center w-full sm:w-auto hover:bg-gray-100 transition">
            Vehicle Description
          </Tab>
          <Tab className="cursor-pointer px-4 py-2 text-center w-full sm:w-auto hover:bg-gray-100 transition">
            Features & Options
          </Tab>
          <Tab className="cursor-pointer px-4 py-2 text-center w-full sm:w-auto hover:bg-gray-100 transition">
            Reviews
          </Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-xl font-bold mb-4">Vehicle Specifications</h2>
          <p>Any content 1</p>
        </TabPanel>
        <TabPanel>
          <h2 className="text-xl font-bold mb-4">Vehicle Description</h2>
          <p>Any content 2</p>
        </TabPanel>
        <TabPanel>
          <h2 className="text-xl font-bold mb-4">Features & Options</h2>
          <p>Any content 3</p>
        </TabPanel>
        <TabPanel>
          <h2 className="text-3xl font-bold mb-5">
            Leave a <span className="text-red-600">Comment</span>
          </h2>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name..."
                  className="p-4 border rounded-md w-full bg-white shadow-lg"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Your Ratings"
                  className="p-4 border rounded-md w-full bg-white shadow-lg"
                />
              </div>
            </div>
            <div className="mt-10 mb-5">
              <textarea
                placeholder="Enter Your Comment..."
                className="p-4 border rounded-md w-full bg-white shadow-lg"
              />
            </div>
            <button className="bg-red-500 text-white px-4 py-2 hover:bg-red-600 transition rounded-md">
              Post Comment
            </button>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CarInformation;
