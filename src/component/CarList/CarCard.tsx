const CarCard = ({ car }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg max-w-xs mx-auto">
      <img
        src={car.image}
        alt={car.title}
        className="w-full h-40 object-cover mb-4"
      />
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-lg font-bold">{car.title}</h3>
          <p className="text-gray-500 text-sm">PER DAY</p>
        </div>
        <div className="mt-4 md:mt-0">
          <span className="text-red-500 font-semibold text-xl">
            {car.price}
          </span>
          <p className="text-gray-500 text-sm">From</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">{car.description}</p>
      <div className="flex flex-col md:flex-row justify-between">
        <button className="border px-6 py-1 text-black hover:bg-black hover:text-white transition mb-2 md:mb-0">
          VIEW
        </button>
        <button className="bg-red-500 text-white px-6 py-1 hover:bg-red-600 transition">
          BOOK
        </button>
      </div>
    </div>
  );
};

export default CarCard;
