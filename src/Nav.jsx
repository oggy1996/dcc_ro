import React from "react";
import { FaBlackTie } from "react-icons/fa";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="nav-logo">
          <FaBlackTie />
        </div>
        KRYPTO
      </div>
      <div className="nav-fill"></div>
      <div className="nav-right"></div>
    </div>
  );
};

export default Nav;
