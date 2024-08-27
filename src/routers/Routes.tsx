import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../component/Home/Home";
import CarList from "../component/CarList/CarList";
import CarViewDetails from "../component/CarViewDetails/CarViewDetails";
import AboutUs from "../component/AboutUs/AboutUs";
import PageError from "../component/PageError/PageError";
import ContactUs from "../component/ContactUs/ContactUs";
import Register from "../component/AuthentiCation/Register/Register";
import Login from "../component/AuthentiCation/Login/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import DashboadLayout from "../layout/DashboardLayout/DashboadLayout";
import UserDashboard from "../component/Dashboard/User/UserDashboard/UserDashboard";
import BookingManagement from "../component/Dashboard/User/BookingManagement/BookingManagement";
import AdminDashboard from "../component/Dashboard/Admin/AdminDashboard/AdminDashboard";
import AdminManageBooking from "../component/Dashboard/Admin/AdminManageBooking/AdminManageBooking";
import UserManagement from "../component/Dashboard/Admin/UserManagement/UserManagement";
import CarBooking from "../component/CarBooking/CarBooking";

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
        element: (
          <ProtectedRoutes>
            <CarList></CarList>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/view-details",
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
        path: "user-dashboard",
        element: <UserDashboard></UserDashboard>,
      },
      {
        path: "user-bookings",
        element: <BookingManagement></BookingManagement>,
      },
      {
        path: "admin-dashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "admin-bookings",
        element: <AdminManageBooking></AdminManageBooking>,
      },
      {
        path: "admin-user-mangements",
        element: <UserManagement></UserManagement>,
      },
    ],
  },
  {
    path: "*",
    element: <PageError />,
  },
]);
