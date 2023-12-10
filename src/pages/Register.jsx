import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

import SocialLogin from "../ui/SocialLogin";
import useTitle from "../hooks/useTitle";
import { useState } from "react";
import { useUserAuth } from "../contexts/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUserUsingEmailAndPassword } = useUserAuth();
  const navigate = useNavigate();
  useTitle("Register");

  // register handler
  const registerHandler = async (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // if (!/(?=.*?[A-Z])/.test(password)) {
    //   setError("At least one upper case");
    //   return;
    // } else if (!/(?=.*?[a-z])/.test(password)) {
    //   setError("At least one lower case English letter");
    //   return;
    // } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
    //   setError("At least one special character");
    //   return;
    // } else if (!/.{6,}/.test(password)) {
    //   setError("Password should be at least 6 character");
    //   return;
    // }
    form.reset();

    // create user using email and password
    // createUserUsingEmailAndPassword(email, password)
    //   .then((result) => {
    //     const user = result.user;
    //     // update user profile
    //     updateUserProfile(name, user);
    //     // verify email
    //     verifyEmail(user);

    //     setUser(user);
    //     setLoading(false);
    //     alert("User has been created successfully!!");
    //     setError("");
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     const errorMessage = error.message;
    //     setError(errorMessage);
    //     // console.log(errorMessage);
    //   });

    try {
      await createUserUsingEmailAndPassword(email, password);
      alert("User has been created successfully!!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // update user profile
  // const updateUserProfile = (name, user) => {
  //   updateProfile(user, {
  //     displayName: name,
  //   })
  //     .then(() => {
  //       console.log("profile updated!");
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       setError(errorMessage);
  //     });
  // };

  // email verification message
  // const verifyEmail = (user) => {
  //   sendEmailVerification(user).then(() => {
  //     alert("Please check your email!");
  //   });
  // };

  return (
    <div className="">
      <h1 className="text-4xl text-gray-700 text-center mb-4 uppercase">register</h1>
      <div className="text-center mb-2">
        <small>
          Already user?
          <Link className="text-blue-600" to="/login">
            Login
          </Link>
          here.
        </small>
      </div>
      <form onSubmit={registerHandler}>
        <div className="space-y-3 md:w-1/2 mx-auto">
          <div className="">
            <input className="border rounded p-2 w-full" type="text" name="name" id="name" placeholder="Enter name" required />
          </div>
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
              Register
            </button>
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
      <p className="text-center text-2xl mt-2">--------------or---------------</p>
      {/* social login */}
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
