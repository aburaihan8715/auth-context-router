import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./router/routes.jsx";
import { RouterProvider } from "react-router-dom";
import { UserAuthContextProvider } from "./contexts/UserAuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  </React.StrictMode>
);
