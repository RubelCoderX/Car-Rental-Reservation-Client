import { authApi } from "../../../../redux/features/Auth/authApi";
import { bookingApi } from "../../../../redux/features/Booking/bookingApi";

const AdminViewProfiile = () => {
  const { data: getMe } = authApi.useGetMeQuery(undefined);
  const userData = getMe?.data;
  const { data: myBookings } = bookingApi.useGetAllBookingsQuery(undefined);
  const bookingData = myBookings?.data;

  const totalBookings = bookingData?.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-slate-400 to-slate-60 p-8 mb-10 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-center text-white">
          Welcome Back,
          <span className="text-yellow-300">{userData?.name}</span>!
        </h2>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* User Profile Card */}
          <div className="bg-white shadow-lg rounded-lg p-8 transition-transform duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div className="flex justify-center">
              <img
                className="w-36 h-36 object-cover rounded-full border-4 border-white shadow-lg"
                src={userData?.image}
                alt={userData?.name}
              />
            </div>
            <div className="text-center mt-6">
              <h2 className="text-3xl font-semibold text-gray-800">
                {userData?.name}
              </h2>
              <p className="mt-2 text-gray-600">Admin</p>
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
              Booking <span className="text-yellow-500">Summary</span>
            </h2>
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <p className="text-xl text-gray-700">
                You have received a total of
                <span className="text-red-600 font-bold">
                  {" "}
                  {totalBookings}{" "}
                </span>
                car bookings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminViewProfiile;
