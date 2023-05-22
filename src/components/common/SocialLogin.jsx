import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth } from "firebase/auth";

import { UserContext } from "../../contexts/AuthProvider";
import app from "../../firebase/firebase.config";
const auth = getAuth(app);

const SocialLogin = () => {
  const { setUser, setLoading, signInUsingGoogle, signInUsingGithub, signInUsingFacebook, setError } = useContext(UserContext);
  const navigate = useNavigate();

  // google
  const loginUsingGoogleHandler = () => {
    signInUsingGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        setLoading(false);
        toast.success("User has been created successfully!!", {
          position: "top-center",
        });
        setError("");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // github
  const loginUsingGithubHandler = () => {
    signInUsingGithub()
      .then((result) => {
        const user = result.user;
        setUser(user);
        setLoading(false);
        toast.success("User has been created successfully!!", {
          position: "top-center",
        });
        setError("");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // facebook
  const loginUsingFacebookHandler = () => {
    signInUsingFacebook()
      .then((result) => {
        const user = result.user;
        setUser(user);
        setLoading(false);
        toast.success("User has been created successfully!!", {
          position: "top-center",
        });
        setError("");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="container mx-auto">
      <div className="text-center mt-8">
        <button onClick={loginUsingGoogleHandler} className="btn btn-primary">
          google
        </button>
        <ToastContainer />
      </div>
      <div className="text-center mt-4">
        <button onClick={loginUsingGithubHandler} className="btn btn-primary">
          github
        </button>
        <ToastContainer />
      </div>
      <div className="text-center mt-4 mb-2">
        <button onClick={loginUsingFacebookHandler} className="btn btn-primary">
          facebook
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SocialLogin;
