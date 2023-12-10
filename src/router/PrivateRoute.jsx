/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";

import { useUserAuth } from "../contexts/UserAuthContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  console.log(location);
  const { user } = useUserAuth();

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
