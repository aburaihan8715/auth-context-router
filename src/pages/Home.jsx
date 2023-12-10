import gifImg from "../assets/images/others/200.gif";
import useTitle from "../hooks/useTitle";

const Home = () => {
  useTitle("Home");

  return (
    <div className="">
      <h1 className="text-3xl text-center font-semibold uppercase">Welcome to world</h1>
      <div className="text-center flex justify-center">
        <img src={gifImg} alt="globe" />
      </div>
    </div>
  );
};

export default Home;
