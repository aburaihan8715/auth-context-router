import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useUserAuth } from "../../contexts/UserAuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputError, setInputError] = useState("");
  const { loginUsingEmailAndPassword } = useUserAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const loginHandler = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    // check inputs are not empty
    if (!email || !password) return setInputError("Input fields should not be empty");

    try {
      const { user } = await loginUsingEmailAndPassword(email, password);
      if (!user) throw new Error("User not found with this address!");
      alert("Login success!!");
      navigate(from);
    } catch (error) {
      setInputError(error.message);
      console.log(error);
    }
    e.target.reset();
  };
  return (
    <form onSubmit={loginHandler}>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input className="border rounded p-3 w-full text-black " type="email" name="email" id="email" placeholder="Enter email" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <div className="relative">
            <input
              className="border rounded p-3 w-full text-black "
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter password"
            />
            {/* eye btn */}
            <span className="absolute right-8 top-1/2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
              {!showPassword && <EyeSlashIcon className="h-6 w-6 text-gray-500" />}
              {showPassword && <EyeIcon className="h-6 w-6 text-gray-500" />}
            </span>
          </div>
        </div>

        <div className="">
          <button className="border w-full p-3 rounded uppercase" type="submit">
            Login
          </button>
        </div>

        {inputError && <p className="text-red-500 text-sm capitalize">{inputError}</p>}

        <div className="text-end">
          <strong className="text-red-600 hover:underline hover:underline-offset-4">
            <Link to="/forgetPassword">Forget Password?</Link>
          </strong>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
