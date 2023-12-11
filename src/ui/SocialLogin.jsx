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
      <button onClick={loginUsingGoogleHandler} className="text-center mt-4 p-3 rounded flex justify-center border w-full">
        <div className="flex gap-4 items-center">
          <img src="https://i.ibb.co/72bXZqD/google.png" width="20px" height="20px" alt="google" />
          <span className="uppercase">google</span>
        </div>
        <ToastContainer />
      </button>

      {/* github login */}
      <button onClick={loginUsingGithubHandler} className="text-center mt-4 p-3 rounded flex justify-center border w-full">
        <div className="flex gap-4 items-center">
          <img src="https://i.ibb.co/JHJ7PMt/github.png" width="20px" height="20px" alt="github" />
          <span className="uppercase">github</span>
        </div>
        <ToastContainer />
      </button>

      {/* facebook login */}
      <button onClick={loginUsingFacebookHandler} className="text-center mt-4 p-3 rounded flex justify-center border w-full">
        <div className="flex gap-4 items-center">
          <img src="https://i.ibb.co/Y7nTmxp/facebook.png" width="20px" height="20px" alt="facebook" />

          <span className="uppercase">facebook</span>
        </div>
        <ToastContainer />
      </button>
    </div>
  );
};

export default SocialLogin;
