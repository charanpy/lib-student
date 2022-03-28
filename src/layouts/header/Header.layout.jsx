import React from "react";
import { useLocation, Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import NavList from "./NavList";
import "./header.css";

const Header = () => {
  const { pathname } = useLocation();
  if (pathname === "/login") return null;
  return (
    <header className="header dark:bg-[#0E1924]">
      <div>
        <Link to="/">
          <h1 className="font-semibold text-2xl 2xl:text-3xl text-slate-900 dark:text-slate-100">
            E-Library
          </h1>
        </Link>
      </div>
      <div className="md:hidden">
        <MobileNavbar />
      </div>
      <div className="hidden md:flex">
        <NavList />
      </div>
    </header>
  );
};

export default Header;
