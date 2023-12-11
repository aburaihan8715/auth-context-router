/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useUserAuth();

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;

// TODO: Note: location means address bar as private route component does not have any path, so here location/address/path is current component path.
