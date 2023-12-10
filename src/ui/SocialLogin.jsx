import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUserAuth } from "../contexts/UserAuthContext";

const SocialLogin = () => {
  const { signInUsingGoogle, signInUsingGithub, signInUsingFacebook } = useUserAuth();
  const navigate = useNavigate();

  // google
  const loginUsingGoogleHandler = async () => {
    try {
      await signInUsingGoogle();
      toast.success("User has been created successfully!!", {
        position: "top-center",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }

    // signInUsingGoogle()
    //   .then((result) => {
    //     const user = result.user;
    //     setUser(user);
    //     setLoading(false);
    //     toast.success("User has been created successfully!!", {
    //       position: "top-center",
    //     });
    //     setError("");
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     const errorMessage = error.message;
    //     setError(errorMessage);
    //   });
  };

  // github
  const loginUsingGithubHandler = async () => {
    try {
      await signInUsingGithub();
      toast.success("User has been created successfully!!", {
        position: "top-center",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }

    // signInUsingGithub()
    //   .then((result) => {
    //     const user = result.user;
    //     setUser(user);
    //     setLoading(false);
    //     toast.success("User has been created successfully!!", {
    //       position: "top-center",
    //     });
    //     setError("");
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     const errorMessage = error.message;
    //     setError(errorMessage);
    //   });
  };

  // facebook
  const loginUsingFacebookHandler = async () => {
    try {
      await signInUsingFacebook();
      toast.success("User has been created successfully!!", {
        position: "top-center",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }

    // signInUsingFacebook()
    //   .then((result) => {
    //     const user = result.user;
    //     setUser(user);
    //     setLoading(false);
    //     toast.success("User has been created successfully!!", {
    //       position: "top-center",
    //     });
    //     setError("");
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     const errorMessage = error.message;
    //     setError(errorMessage);
    //   });
  };

  return (
    <div className="">
      {/* google login */}
      <div className="text-center mt-4 flex justify-center border">
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
