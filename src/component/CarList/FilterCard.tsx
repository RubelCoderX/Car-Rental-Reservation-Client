const FilterCard = () => {
  return (
    <div className=" text-white p-6 rounded-lg shadow-lg w-full mx-auto">
      <form className="">
        <div className="block">
          <label className="block text-sm font-bold mb-2">Search</label>
          <input
            type="text"
            placeholder="Search Here..."
            className="w-full p-2 rounded bg-white text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Search</label>
          <input
            type="text"
            placeholder="Search Here..."
            className="w-full p-2 rounded bg-white text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Search</label>
          <input
            type="text"
            placeholder="Search Here..."
            className="w-full p-2 rounded bg-white text-black"
          />
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center">
          <button className="w-full sm:w-auto bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">
            SEARCH
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterCard;

// https://github.com/princeRubel1/Car-Rental-Reservation-Client.git
