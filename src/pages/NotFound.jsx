import { useNavigate, useRouteError } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const NotFound = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  useTitle("NotFound");

  // console.error(error);
  return (
    <div className="">
      <div className="">
        <small onClick={() => navigate(-1)} className="text-blue-700 cursor-pointer">
          Go back
        </small>
      </div>
      <div className="flex justify-center items-center">
        <div className="text-5xl">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
