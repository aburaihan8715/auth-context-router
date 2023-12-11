import { useState } from "react";
import { useUserAuth } from "../../contexts/UserAuthContext";

const ForgetPasswordForm = () => {
  const [inputError, setInputError] = useState("");
  const { passwordResetEmail } = useUserAuth();
  const passwordResetSubmitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    try {
      await passwordResetEmail(email);
      alert("Please check your mail!!");
    } catch (error) {
      console.log(error);
      setInputError(error.message);
    }
    e.target.reset();
  };

  return (
    <form onSubmit={passwordResetSubmitHandler}>
      <div className="space-y-3 mx-auto">
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input className="border rounded p-3 w-full text-black " type="email" name="email" id="email" placeholder="Enter email" required />
        </div>

        <div className="">
          <button className="border w-full p-3 rounded uppercase" type="submit">
            Register
          </button>
        </div>

        {inputError && <p className="text-red-500 text-sm capitalize">{inputError}</p>}
      </div>
    </form>
  );
};

export default ForgetPasswordForm;
