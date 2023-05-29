import React from "react";
import gifImg from "../assets/images/200.gif";
import useTitle from "../hooks/useTitle";

const Home = () => {
  useTitle("Home")

  return (
    <div className="container">
      <div className="min-h-[calc(100vh-132px)] text-5xl flex justify-center items-center">
        <img src={gifImg} alt="globe" />
      </div>
    </div>
  );
};

export default Home;
