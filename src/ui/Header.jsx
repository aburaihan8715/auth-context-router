import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const role = "admin";
  return (
    <header>
      <nav className=" flex justify-between items-center">
        <Link to={`/`} className="flex flex-col">
          <span className="uppercase text-3xl font-semibold">react</span>
          <span>router and firebase auth</span>
        </Link>

        <ul className="flex gap-4">
          <li>
            <NavLink className="" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/public">public</NavLink>
          </li>
          <li>
            <NavLink to="/authenticated">authenticated</NavLink>
          </li>
          <li>
            <NavLink to={`/${role}`}>role-based</NavLink>
          </li>
        </ul>

        <div className="flex items-center">
          <div className="flex items-center gap-4">
            <button className="border py-2 px-4">logout</button>
            <span className="border-2 w-12 h-12 rounded-full text-center flex justify-center items-center"> 🧔</span>
          </div>
          <button className="border py-2 px-4">login</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
