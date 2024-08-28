import { Link } from "react-router-dom";
import Starts from "../../shared/Starts/Starts";

const FeaturedCarCard = ({ car }) => {
  const id = car?._id;
  const star = car?.ratings;

  return (
    <div
      style={{ background: "#EFF2F4" }}
      className="border rounded-lg p-3 md:h-[500px] shadow-lg max-w-xs mx-auto"
    >
      <div className="bg-white p-3 rounded-lg mb-4">
        <img
          src={car?.carImgUrl[0]}
          alt={car?.name}
          className="w-full h-48 rounded-md object-cover "
        />
      </div>

      <div className="bg-white md:px-4 p-4 md:py-7 rounded-lg">
        <div>
          <Starts star={star}></Starts>
        </div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl font-bold">{car?.name}</h3>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-red-500 font-semibold text-xl">
              ${car?.pricePerHour}
            </span>
            <p className="text-gray-500 text-sm">Per Hour</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4 text-justify line-clamp-2">
          {car?.description}
        </p>
        <div className="flex flex-col md:flex-row justify-between">
          <Link to={`/view-details/${id}`}>
            <button className="border px-4 py-1 text-black hover:bg-black hover:text-white transition mb-2 md:mb-0">
              View Details
            </button>
          </Link>

          <button className="bg-red-500 text-white px-4 py-1 hover:bg-red-600 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarCard;
