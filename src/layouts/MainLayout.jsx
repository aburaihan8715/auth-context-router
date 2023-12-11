import Header from "../ui/Header";
import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto min-h-screen flex flex-col justify-between ">
      <Header></Header>
      <div className="py-5">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
