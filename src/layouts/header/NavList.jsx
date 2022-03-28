import React from "react";
import { Link } from "react-router-dom";
import UserSVG from "../../components/shared/svg/User.svg";
import { useAuth } from "../../context/auth.context";
import navItems, { liStyle } from "./helper";
import ToggleTheme from "./ToggleTheme";

const NavList = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <nav>
        <ul className="list-none flex flex-col space-y-4 md:space-y-0  md:flex-row md:flex-wrap md:space-x-8 navList">
          {navItems.map(({ name, path }) => (
            <Link to={path} key={name}>
              <li className={liStyle}>{name}</li>
            </Link>
          ))}
          <ToggleTheme />
          {!user && (
            <Link to={"/login"}>
              <li className={liStyle}>Login</li>
            </Link>
          )}

          {user && (
            <li className={liStyle} onClick={logout}>
              Logout
            </li>
          )}
          {user && (
            <Link to="/profile">
              <li className={`${liStyle} row centerAll`}>
                <UserSVG />
                <span className="ml-2">Profile</span>
              </li>
            </Link>
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavList;
