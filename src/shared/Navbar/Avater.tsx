import { FaUser } from "react-icons/fa6";
import { verifyToken } from "../../utils/verifyToken";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/features/Auth/authSlice";

const Avatar = () => {
  const token = useAppSelector(useCurrentToken);
  let user;

  if (token) {
    user = verifyToken(token);
  }

  const profile = user?.image;

  return (
    <div className="flex items-center">
      {user ? (
        <img
          src={profile}
          alt={user?.name}
          className="h-8 w-8 rounded-full object-cover"
        />
      ) : (
        <FaUser className="h-8 w-8 rounded-full text-gray-500" />
      )}
    </div>
  );
};

export default Avatar;
