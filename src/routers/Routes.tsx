import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../component/Home/Home";
import CarList from "../pages/CarList/CarList";
import CarViewDetails from "../pages/CarViewDetails/CarViewDetails";
import AboutUs from "../pages/AboutUs/AboutUs";
import PageError from "../component/PageError/PageError";
import ContactUs from "../pages/ContactUs/ContactUs";
import Register from "../component/AuthentiCation/Register/Register";
import Login from "../component/AuthentiCation/Login/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import DashboadLayout from "../layout/DashboardLayout/DashboadLayout";
import AdminManageBooking from "../component/Dashboard/Admin/AdminManageBooking/AdminManageBooking";
import CarBooking from "../pages/CarBooking/CarBooking";
import UserVeiwProfile from "../component/Dashboard/User/UserProfile/UserVeiwProfile";
import UpdateProfile from "../component/Dashboard/User/UserProfile/UpdateProfile";
import AllBookings from "../component/Dashboard/User/BookingManagement/AllBookings";
import AdminViewProfiile from "../component/Dashboard/Admin/AdminProfile/AdminViewProfiile";
import AdminAllUser from "../component/Dashboard/Admin/UserManagement/adminAllUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "car",
        element: <CarList></CarList>,
      },
      {
        path: "/view-details/:id",
        element: <CarViewDetails></CarViewDetails>,
      },
      {
        path: "about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "booking",
        element: <CarBooking></CarBooking>,
      },
      {
        path: "/error",
        element: <PageError />,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoutes>
        <DashboadLayout></DashboadLayout>
      </ProtectedRoutes>
    ),
    children: [
      {
        path: "profile-view",
        element: <UserVeiwProfile></UserVeiwProfile>,
      },
      {
        path: "profile-update",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "all-bookings",
        element: <AllBookings></AllBookings>,
      },
      {
        /* admin Profile Dropdown */
      },
      {
        path: "admin-profile-view",
        element: <AdminViewProfiile></AdminViewProfiile>,
      },
      {
        path: "admin-bookings",
        element: <AdminManageBooking></AdminManageBooking>,
      },
      {
        path: "all-users",
        element: <AdminAllUser></AdminAllUser>,
      },
    ],
  },
  {
    path: "*",
    element: <PageError />,
  },
]);
