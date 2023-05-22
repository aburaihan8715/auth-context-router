import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../contexts/AuthProvider";

const Header = () => {
  const { logOut, user, setUser } = useContext(UserContext);
  // console.log(user);

  // nav items
  const menuItems = (
    <>
      <li>
        <NavLink className="" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/order">Order</NavLink>
      </li>
      <li>
        <span className="text-orange-600">{user?.displayName}</span>
      </li>
    </>
  );

  // logout handler
  const logOutHandler = () => {
    logOut()
      .then(() => {
        setUser(null);
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  };

  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">RouterAuthContext</a>
      </div>

      {/* mobile nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{menuItems}</ul>
      </div>
      <div className="navbar-end space-x-2">
        {!user?.uid && (
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        )}

        {user?.uid && (
          <button onClick={logOutHandler} className="btn btn-primary">
            LogOut
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
