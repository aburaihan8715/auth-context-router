import { Link, NavLink, useNavigate } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";

const Header = () => {
  const role = "admin";
  const navigate = useNavigate();
  const { logOut, user } = useUserAuth();

  const logOutHandler = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header>
      <nav className=" flex justify-between items-center">
        <Link to={`/`} className="flex flex-col">
          <span className="uppercase text-3xl font-semibold">react</span>
          <span>router and firebase auth</span>
        </Link>

        <ul className="flex gap-4">
          <li>
            <NavLink className="uppercase" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="uppercase" to="/public">
              public
            </NavLink>
          </li>
          <li>
            <NavLink className="uppercase" to="/authenticated">
              authenticated
            </NavLink>
          </li>
          <li>
            <NavLink className="uppercase" to={`/${role}`}>
              role-based
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center">
          {user ? (
            <div className="flex items-center gap-4">
              <button onClick={logOutHandler} className="border py-2 px-4 uppercase">
                logout
              </button>
              <span className="border-2 w-12 h-12 rounded-full text-center flex justify-center items-center"> 🧔</span>
            </div>
          ) : (
            <button onClick={() => navigate("/login")} className="border py-2 px-4 uppercase">
              login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
