import useTitle from "../hooks/useTitle";

const Authenticated = () => {
  useTitle("Authenticated");
  return (
    <div className="">
      <div className="">Authenticated</div>
    </div>
  );
};

export default Authenticated;
