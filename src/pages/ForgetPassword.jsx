import { useNavigate } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import ForgetPasswordForm from "../components/authentication/ForgetPasswordForm";

const ForgetPassword = () => {
  const navigate = useNavigate();
  useTitle("ForgetPassword");

  return (
    <div className="border max-w-md mx-auto p-5 rounded">
      <h1 className="text-3xl uppercase text-center mb-4">reset password</h1>
      <ForgetPasswordForm />
      <div className=" mt-2">
        <strong onClick={() => navigate(-1)} className="text-red-600 cursor-pointer hover:underline hover:underline-offset-4">
          Go back
        </strong>
      </div>
    </div>
  );
};

export default ForgetPassword;
