import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import SocialLogin from "../ui/SocialLogin";
import useTitle from "../hooks/useTitle";
import { useState } from "react";
import { useUserAuth } from "../contexts/UserAuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUsingEmailAndPassword } = useUserAuth();
  useTitle("Login");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const loginHandler = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();

    // login user using email and password
    // loginUsingEmailAndPassword(email, password)
    //   .then((result) => {
    //     const user = result.user;

    //     alert("Login success!!");
    //     setError("");
    //     navigate(from);
    //   })
    //   .catch((error) => {
    //     const errorMessage = error.message;
    //     setError(errorMessage);
    //     console.log(errorMessage);
    //   });

    try {
      await loginUsingEmailAndPassword(email, password);
      alert("Login success!!");
      navigate(from);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="border max-w-md mx-auto p-5 rounded">
      <h1 className="text-3xl uppercase text-center mb-4">Login</h1>
      <div className="flex gap-2 justify-center mb-2">
        <span>New user?</span>
        <strong>
          <Link className="text-red-600" to="/register">
            Register
          </Link>
        </strong>
        <span> here.</span>
      </div>

      <form onSubmit={loginHandler}>
        <div className="">
          <div className="">
            <input className="border rounded p-2 w-full" type="email" name="email" id="email" placeholder="Enter email" required />
          </div>
          <div className="relative">
            <input
              className="border rounded p-2 w-full"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter password"
              required
            />
            <span className="absolute right-8 top-1/2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
              {!showPassword && <EyeSlashIcon className="h-6 w-6 text-gray-500" />}
              {showPassword && <EyeIcon className="h-6 w-6 text-gray-500" />}
            </span>
          </div>

          <div className="text-right">
            <button className="btn btn-primary w-full" type="submit">
              Login
            </button>
          </div>

          <div className="text-end">
            <small className="text-blue-700">
              <Link to="/forgetPassword">Forget Password?</Link>
            </small>
          </div>

          {/* error message */}
          {/* {error && (
            <div className="alert alert-error shadow-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          )} */}
        </div>
      </form>
      <p className="text-center text-2xl">---------------or---------------</p>

      {/* social login */}
      <SocialLogin />
    </div>
  );
};

export default Login;
