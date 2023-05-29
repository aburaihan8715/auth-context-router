import React from "react";
import useTitle from "../hooks/useTitle";

const About = () => {
  useTitle("About")
  return (
    <div className="container">
      <div className="min-h-[calc(100vh-132px)] text-5xl flex justify-center items-center">about</div>
    </div>
  );
};

export default About;
