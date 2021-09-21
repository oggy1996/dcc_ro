import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [navMenuIconClick, setNavMenuIconClick] = useState(false);
  const [showNavButton, setShowNavButton] = useState(true);

  const handleClick = () => setNavMenuIconClick(!navMenuIconClick);
  const closeMobileMenu = () => setNavMenuIconClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setShowNavButton(false);
    } else {
      setShowNavButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <FaMoneyCheckAlt className="navbar-icon" />
              KRYPTO
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {navMenuIconClick ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={navMenuIconClick ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li className="nav-btn">
                {showNavButton ? (
                  <Link to="/sign-up" className="btn-link">
                    <Button buttonStyle="btn--outline">SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to="/sign-up" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
