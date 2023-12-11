import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../contexts/UserAuthContext";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUserUsingEmailAndPassword, updateUserProfile } = useUserAuth();
  const [inputError, setInputError] = useState("");
  const navigate = useNavigate();

  // register handler
  const submitHandler = async (e) => {
    e.preventDefault();
    setInputError("");

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // check inputs are not empty
    if (!name || !email || !password) return setInputError("Input fields should not be empty");

    // check password is correct
    if (!/(?=.*?[A-Z])/.test(password)) {
      return setInputError("At least one upper case");
    } else if (!/(?=.*?[a-z])/.test(password)) {
      return setInputError("At least one lower case English letter");
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      return setInputError("At least one special character");
    } else if (!/.{6,}/.test(password)) {
      return setInputError("Password should be at least 6 character");
    }

    try {
      const { user } = await createUserUsingEmailAndPassword(email, password);
      if (!user) throw new Error("Couldn't create user!");
      await updateUserProfile(name);
      alert("Registration success!");
      navigate("/");
    } catch (error) {
      setInputError(error.message);
      console.log(error);
    }
    e.target.reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input className="border rounded p-3 w-full text-black " type="text" name="name" id="name" placeholder="Enter name" />
        </div>

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
            Register
          </button>
        </div>
        {inputError && <p className="text-red-500 text-sm capitalize">{inputError}</p>}
      </div>
    </form>
  );
};

export default RegisterForm;
