import SocialLogin from "../ui/SocialLogin";
import useTitle from "../hooks/useTitle";

import Divider from "../ui/Divider";
import RegisterForm from "../components/authentication/RegisterForm";
import { Link } from "react-router-dom";

const Register = () => {
  useTitle("Register");

  return (
    <div className="border max-w-md mx-auto p-5 rounded">
      <h1 className="text-3xl uppercase text-center mb-4">register</h1>
      <div className="flex gap-2 justify-center mb-2">
        <span>Already user?</span>
        <strong>
          <Link className="text-red-600 hover:underline hover:underline-offset-4" to="/login">
            Login
          </Link>
        </strong>
        <span> here.</span>
      </div>
      <RegisterForm />
      <Divider />
      <SocialLogin />
    </div>
  );
};

export default Register;
