import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/AuthProvider";

const Login = () => {
  const { loginUsingEmailAndPassword, setUser, setLoading, signInUsingGoogle, signInUsingGithub, signInUsingFacebook } = useContext(UserContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const loginHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    form.reset();

    // login user using email and password
    loginUsingEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setLoading(false);
        alert("Login success!!");
        navigate(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // login using google
  const loginUsingGoogleHandler = () => {
    signInUsingGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        setLoading(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // login using github
  const loginUsingGithubHandler = () => {
    signInUsingGithub()
      .then((result) => {
        const user = result.user;
        setUser(user);
        setLoading(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // login using facebook
  const loginUsingFacebookHandler = () => {
    signInUsingFacebook()
      .then((result) => {
        const user = result.user;
        setUser(user);
        setLoading(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-gray-700 uppercase text-center mb-4">Login</h1>
      <div className="text-center mb-2">
        <small>
          New user?
          <Link className="text-blue-600" to="/register">
            Register
          </Link>
          here.
        </small>
      </div>
      <form onSubmit={loginHandler}>
        <div className="space-y-3 md:w-1/2 mx-auto">
          <div className="">
            <input className="border rounded p-2 w-full" type="email" name="email" id="email" placeholder="Enter email" required />
          </div>
          <div className="">
            <input className="border rounded p-2 w-full" type="password" name="password" id="password" placeholder="Enter password" required />
          </div>

          <div className="text-right">
            <input className="btn btn-primary w-full" type="submit" value="Login" />
          </div>
        </div>
      </form>
      <p className="text-center text-2xl mt-4">---------------or---------------</p>
      <div className="text-center mt-8">
        <button onClick={loginUsingGoogleHandler} className="btn btn-primary">
          Login with google
        </button>
      </div>
      <div className="text-center mt-8">
        <button onClick={loginUsingGithubHandler} className="btn btn-primary">
          Login with github
        </button>
      </div>
      <div className="text-center mt-8 mb-2">
        <button onClick={loginUsingFacebookHandler} className="btn btn-primary">
          Login with facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
