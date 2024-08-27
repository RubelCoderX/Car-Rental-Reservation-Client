import { ReactNode } from "react";
import { useAppSelector } from "../redux/hooks";
import { useCurrentToken } from "../redux/features/Auth/authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken);
  // console.log(token);
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoutes;
