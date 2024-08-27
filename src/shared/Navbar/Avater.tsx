import { FaUser } from "react-icons/fa6";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/features/Auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";

const Avatar = () => {
  const token = useAppSelector(useCurrentToken);
  let user;

  if (token) {
    user = verifyToken(token);
  }

  const profile = user?.image;

  return (
    <div className="flex items-center">
      {profile ? (
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
