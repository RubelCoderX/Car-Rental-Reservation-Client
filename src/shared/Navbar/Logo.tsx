import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img
          className="hidden md:block"
          width="100"
          height="100"
          src={logo}
          alt=""
        />
        {/* <h2 className="text-xl font-semibold hidden md:block">
          Rent<span className="text-red-600">Wheels</span>
        </h2> */}
      </Link>
    </div>
  );
};

export default Logo;
