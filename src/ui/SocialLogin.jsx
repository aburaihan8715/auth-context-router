import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth } from "firebase/auth";

import { UserContext } from "../contexts/AuthProvider";
import app from "../firebase/firebase.config";
getAuth(app);

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
    <div className="">
      {/* google login */}
      <div className="text-center mt-4 flex justify-center">
        <div className="w-48">
          <button onClick={loginUsingGoogleHandler} className="btn btn-primary w-full flex justify-between px-10">
            <span>
              <img src="https://i.ibb.co/72bXZqD/google.png" width="24px" height="24px" alt="google" />{" "}
            </span>
            <span>google</span>
          </button>
          <ToastContainer />
        </div>
      </div>

      {/* github login */}
      <div className="text-center mt-4  flex justify-center">
        <div className="w-48">
          <button onClick={loginUsingGithubHandler} className="btn btn-primary w-full flex justify-between px-10">
            <span>
              <img src="https://i.ibb.co/JHJ7PMt/github.png" width="24px" height="24px" alt="google" />{" "}
            </span>
            <span>google</span>
          </button>
          <ToastContainer />
        </div>
      </div>

      {/* facebook login */}
      <div className="text-center mt-4 mb-2  flex justify-center">
        <div className="w-48">
          <button onClick={loginUsingFacebookHandler} className="btn btn-primary w-full flex justify-between px-10">
            <span>
              <img src="https://i.ibb.co/Y7nTmxp/facebook.png" width="24px" height="24px" alt="google" />{" "}
            </span>
            <span>google</span>
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
