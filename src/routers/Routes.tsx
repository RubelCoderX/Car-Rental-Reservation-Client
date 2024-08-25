import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../component/Home/Home";
import CarList from "../component/CarList/CarList";
import CarViewDetails from "../component/CarViewDetails/CarViewDetails";

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
        path: "/view-details",
        element: <CarViewDetails></CarViewDetails>,
      },
    ],
  },
]);
