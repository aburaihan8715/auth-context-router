import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import ForgetPassword from "../pages/ForgetPassword";
import Public from "../pages/Public";
import Authenticated from "../pages/Authenticated";
import Admin from "../pages/Admin";
import Teacher from "../pages/Teacher";
import SimpleUser from "../pages/SimpleUser";
import VerifyEmail from "../pages/VerifyEmail";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/public",
        element: <Public></Public>,
      },
      {
        path: "/authenticated",
        element: <Authenticated></Authenticated>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/forgetPassword",
        element: <ForgetPassword></ForgetPassword>,
      },

      {
        path: "/verifyEmail",
        element: <VerifyEmail></VerifyEmail>,
      },
      {
        path: "/admin",
        element: <Admin></Admin>,
      },
      {
        path: "/teacher",
        element: <Teacher></Teacher>,
      },
      {
        path: "/simpleUser",
        element: <SimpleUser></SimpleUser>,
      },
    ],
  },
]);

export default router;
