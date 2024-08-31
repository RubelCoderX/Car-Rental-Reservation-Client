import { Tag, Spin } from "antd";
import { bookingApi } from "../../../../redux/features/Booking/bookingApi";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { userApi } from "../../../../redux/features/user/userApi";
import Loader from "../../../../shared/Loader/Loader";

const UserViewProfile = () => {
  // Fetch user data
  const { data: getMe, isLoading: isLoadingUser } =
    userApi.useGetMeQuery(undefined);
  const userData = getMe?.data;

  // Fetch booking data
  const { data: myBookings, isLoading: isLoadingBookings } =
    bookingApi.useGetMyBookingsQuery(undefined);
  const bookingData = myBookings?.data;

  // Calculate total bookings
  const totalBooking = bookingData?.length;

  // Show loading spinner while data is being fetched
  if (isLoadingUser || isLoadingBookings) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-slate-400 to-slate-600 p-8 mb-10 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-center text-white">
          Welcome Back,{" "}
          <span className="text-yellow-300">{userData?.name}</span>!
        </h2>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* User Profile Card */}
          <div className="relative bg-white shadow-lg rounded-lg p-8 transition-transform duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div className="flex justify-center cursor-pointer">
              <Link to="/dashboard/profile-update" className="relative">
                <img
                  className="w-36 h-36 object-cover rounded-full border-4 border-white shadow-lg"
                  src={userData?.image}
                  alt={userData?.name}
                />
                {/* Edit Icon */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 rounded-full">
                  <FaEdit className="text-3xl text-white" />
                </div>
              </Link>
            </div>
            <div className="text-center mt-6">
              <h2 className="text-3xl font-semibold text-gray-800">
                {userData?.name}
              </h2>
              <Tag className="mt-2 text-gray-600">{userData?.role}</Tag>
            </div>
            <div className="mt-8 text-center text-gray-600">
              <p>
                <span className="font-semibold">Mobile: </span>
                {userData?.phone}
              </p>
              <p className="mt-2">
                <span className="font-semibold">Email: </span>
                {userData?.email}
              </p>
            </div>
          </div>

          {/* Total Booking History Card */}
          <div className="bg-white shadow-lg rounded-lg p-8 transition-transform duration-300 hover:shadow-xl col-span-1 md:col-span-2 transform hover:-translate-y-1">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
              My Booking <span className="text-yellow-500">Summary</span>
            </h2>
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              {totalBooking > 0 ? (
                <p className="text-xl text-gray-700">
                  You have made
                  <span className="text-red-600 font-bold">
                    {" "}
                    {totalBooking}{" "}
                  </span>
                  car bookings so far.
                </p>
              ) : (
                <p className="text-xl text-gray-700">
                  You currently have{" "}
                  <span className="text-red-600">no bookings</span>. Start
                  exploring and book a car!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserViewProfile;
