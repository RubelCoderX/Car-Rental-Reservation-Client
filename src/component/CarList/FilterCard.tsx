const FilterCard = () => {
  return (
    <div className="p-2 rounded-lg w-full h-[500px] mx-auto ">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Filter For Car Type
      </label>
      <select
        id="car-type"
        className="bg-white border  text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg mb-10"
      >
        <option selected>Car Type</option>
        <option value="sedan">Sedan</option>
        <option value="suv">SUV</option>
        <option value="hatchback">Hatchback</option>
        <option value="truck">Truck</option>
        <option value="convertible">Convertible</option>
      </select>

      <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Price Range
      </label>
      <select
        id="price-range"
        className="bg-white border  text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-lg "
      >
        <option selected>Price Range</option>
        <option value="0-50">$0 - $50</option>
        <option value="51-100">$51 - $100</option>
        <option value="101-200">$101 - $200</option>
        <option value="201-500">$201 - $500</option>
        <option value="500+">$500+</option>
      </select>
    </div>
  );
};

export default FilterCard;
