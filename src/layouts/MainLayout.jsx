import React from "react";
import Header from "../components/common/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <div className="min-h-[calc(100vh-132px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
