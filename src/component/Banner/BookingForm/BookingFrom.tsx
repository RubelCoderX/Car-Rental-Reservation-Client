const BookingForm = () => {
  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-lg w-full mx-auto">
      <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Pick Up Location */}
        <div>
          <label className="block text-sm font-bold mb-2">Pick Up</label>
          <input
            type="text"
            placeholder="City, district or specific airport"
            className="w-full p-2 rounded bg-white text-black"
          />
        </div>

        {/* Drop Off Location */}
        <div>
          <label className="block text-sm font-bold mb-2">Drop Off</label>
          <input
            type="text"
            placeholder="City, district or specific airport"
            className="w-full p-2 rounded bg-white text-black"
          />
        </div>

        {/* Adults */}
        <div>
          <label className="block text-sm font-bold mb-2">Adults</label>
          <select className="w-full p-2 rounded bg-white text-black">
            <option>01</option>
            <option>02</option>
            <option>03</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Kids */}
        <div>
          <label className="block text-sm font-bold mb-2">Kids</label>
          <select className="w-full p-2 rounded bg-white text-black">
            <option>01</option>
            <option>02</option>
            <option>03</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Promocode */}
        <div className="col-span-1 lg:col-span-2">
          <label className="block text-sm font-bold mb-2">Promocode</label>
          <input
            type="text"
            placeholder="Type here"
            className="w-full p-2 rounded bg-white text-black"
          />
        </div>

        {/* Pick Up Date/Time */}
        <div>
          <label className="block text-sm font-bold mb-2">
            Pick Up Date/Time
          </label>
          <div className="flex">
            <input
              type="text"
              placeholder="mm/dd/yy"
              className="w-1/2 p-2 rounded bg-white text-black"
            />
            <select className="w-1/2 p-2 rounded bg-white text-black">
              <option>Anytime</option>
              {/* Add more time options */}
            </select>
          </div>
        </div>

        {/* Drop Off Date/Time */}
        <div>
          <label className="block text-sm font-bold mb-2">
            Drop Off Date/Time
          </label>
          <div className="flex">
            <input
              type="text"
              placeholder="mm/dd/yy"
              className="w-1/2 p-2 rounded bg-white text-black"
            />
            <select className="w-1/2 p-2 rounded bg-white text-black">
              <option>Anytime</option>
              {/* Add more time options */}
            </select>
          </div>
        </div>

        {/* Car Type */}
        <div>
          <label className="block text-sm font-bold mb-2">Car Type</label>
          <select className="w-full p-2 rounded bg-white text-black">
            <option>Economy</option>
            {/* Add more car types */}
          </select>
        </div>

        {/* Search Button */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center">
          <button className="w-full sm:w-auto bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">
            SEARCH
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
