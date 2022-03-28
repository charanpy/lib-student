import React from "react";
import { Link } from "react-router-dom";
import UserSVG from "../../components/shared/svg/User.svg";
import { useAuth } from "../../context/auth.context";
import navItems, { liStyle } from "../header/helper";

const Footer = () => {
  const year = new Date().getFullYear();
  const { user, logout } = useAuth();
  return (
    <div>
      <div className="footer flex flex-col  w-full md:flex-row">
        <div className="footer-left flex flex-col md:flex-row justify-around md:w-3/6 ">
          <div className="footer-left-1 mt-6">
            <h1 className="text-2xl text-slate-900 md:text-xl font-normal text-center lg:text-2xl dark:text-white">
              E-Library Student Panel
            </h1>
            <p className="text-sm max-w-prose indent-8 mt-4 dark:text-white p-3 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              voluptatum minus eum alias nisi ipsum temporibus. Magni nisi
              doloribus explicabo, aspernatur delectus quibusdam cupiditate odit
              cum tempore quas odio sed.
            </p>
          </div>
          <div className="footer-left-2 mt-6">
            <h1 className="text-2xl text-slate-900 font-normal md:text-xl  lg:text-2xl text-center dark:text-white">
              Office
            </h1>
            <address className="text-sm max-w-prose text-center mt-2 dark:text-white ">
              <pre>
                ITPL Road <br></br>Whitefield,Poonnamalle<br></br>Chennai-600123
                <br></br>India.
              </pre>
              <p className="dark:text-white max-w-prose">abc@gmail.com</p>
              <p className="dark:text-white max-w-prose">+91 9999999999</p>
            </address>
          </div>
        </div>
        <div className="footer-right flex flex-col md:flex-row justify-around md:w-3/6 ">
          <div className="footer-right-1 mt-6">
            <h1 className="text-2xl text-slate-900 font-normal md:text-xl lg:text-2xl text-center dark:text-white">
              Links
            </h1>
            <nav className="text-center">
              <ul className="list-none leading-8 navList">
                {navItems.map(({ name, path }) => (
                  <Link to={path} key={name}>
                    <li className={liStyle}>{name}</li>
                  </Link>
                ))}
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
          </div>
          <div className="footer-right-2 mt-6"></div>
        </div>
      </div>
      <p>Developed with ❤️</p>
    </div>
  );
};

export default Footer;
