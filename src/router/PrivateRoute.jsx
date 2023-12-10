/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/AuthProvider";
import LoadingSpinner from "../ui/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  console.log(location);
  const { user, loading } = useContext(UserContext);
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
