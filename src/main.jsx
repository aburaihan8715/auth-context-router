import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./router/routes.jsx";
import { RouterProvider } from "react-router-dom";
import AuthContext from "./contexts/AuthProvider";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </AuthContext>
  </React.StrictMode>
);
