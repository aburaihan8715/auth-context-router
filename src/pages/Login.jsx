import SocialLogin from "../ui/SocialLogin";
import useTitle from "../hooks/useTitle";
import { Link } from "react-router-dom";
import Divider from "../ui/Divider";
import LoginForm from "../components/authentication/LoginForm";

const Login = () => {
  useTitle("Login");

  return (
    <div className="border max-w-md mx-auto p-5 rounded">
      <h1 className="text-3xl uppercase text-center mb-4">Login</h1>
      <div className="flex gap-2 justify-center mb-2">
        <span>New user?</span>
        <strong>
          <Link className="text-red-600 hover:underline hover:underline-offset-4" to="/register">
            Register
          </Link>
        </strong>
        <span> here.</span>
      </div>
      <LoginForm />
      <Divider />
      <SocialLogin />
    </div>
  );
};

export default Login;
