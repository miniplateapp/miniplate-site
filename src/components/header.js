import { Link } from "gatsby";
import React from "react";
import logo from "../images/logo.png";

function Header() {
  return (
    <header className="">
      <div className="flex flex-wrap items-center justify-center pt-8 pb-4 mx-auto">
        <Link to="/">
          <div className="flex items-center no-underline justify-center">
            <img alt="miniplate log" src={logo} width="40px"/>
          </div>
          <div className="mt-2">
            <span className="text-3xl font-semibold lowercase">
              <span style={{color: "#ED3833"}}>mini</span>
              <span style={{color: "#6D6E70"}}>plate</span>
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
