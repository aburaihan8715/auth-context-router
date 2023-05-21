import React from "react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="container mx-auto">
      <button className="btn btn-link">Back</button>
      <div className="flex justify-center items-center min-h-[calc(100vh-48px)]">
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
