import React, { useContext, useRef } from "react";
import { UserContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);

const ForgetPassword = () => {
  const { error, setError } = useContext(UserContext);
  const navigate = useNavigate();
  // const emailRef = useRef();

  const passwordResetSubmitHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    passwordResetEmail(email);
    form.reset();
  };

  // password reset email
  const passwordResetEmail = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please check your mail!!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="container mx-auto">
      <div className="min-h-[calc(100vh-132px)] flex justify-center items-center">
        <div className="">
          <h1 className="text-4xl text-gray-700 uppercase text-center mb-4">Forget Password</h1>
          <form onSubmit={passwordResetSubmitHandler}>
            <div className="space-y-3 mx-auto">
              <div className="w-full">
                <input className="border rounded p-2 w-full" type="email" name="email" id="email" placeholder="Enter email" required />
              </div>

              <div className="text-right">
                <button className="btn btn-primary w-full" type="submit">
                  Submit
                </button>
              </div>

              {/* error message */}

              {error && (
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
              )}
            </div>
          </form>
          {/* go back */}
          <div className="">
            <small onClick={() => navigate(-1)} className="text-blue-700 cursor-pointer">
              Go back
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
