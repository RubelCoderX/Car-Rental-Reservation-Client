import { AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Stars = ({ star = 0 }) => {
  const ratings = Array.from({ length: 5 }, (ele, index) => {
    const number = index + 1;

    return (
      <span key={index}>
        {star >= number ? (
          <FaStar />
        ) : star >= number - 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  return (
    <div className="text-orange-400 flex items-center">
      {ratings}
      <span className="text-sm ml-2">{star.toFixed(1)} out of 5</span>
    </div>
  );
};

export default Stars;
