import React, { useState, useEffect } from "react";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import "../CSS/navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`Navbar ${show && "nav-black"}`}>
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netlfix Logo"
      />
      <div className="navigation-menu">
        <ul>
          <li className="navigation">
            <button className="drop-button" href="/">
              Browse <ExpandMoreRoundedIcon fontSize={"small"} />
            </button>
            <div className="sub-menu">
              <ul>
              <li className="sub-menu-item"> <a href="/">Home</a></li>
              <li className="sub-menu-item"> <a href="/">TV Shows</a></li>
              <li className="sub-menu-item"> <a href="/">Movies</a></li>
              <li className="sub-menu-item"> <a href="/">Latest</a></li>
              <li className="sub-menu-item"> <a href="/">My List</a></li>
              </ul>
            </div>
          </li>
          <li className="navigation-item">
            <a href="/"> Home </a>
          </li>
          <li className="navigation-item">
            <a href="/"> TV Shows </a>
          </li>
          <li className="navigation-item">
            <a href="/"> Movies </a>
          </li>
          <li className="navigation-item">
            <a href="/"> Latest </a>
          </li>
          <li className="navigation-item">
            <a href="/"> My List </a>
          </li>
        </ul>
      </div>
      <img
        className="nav-avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/2c659933850498.56ba69ac2e080.png"
        alt="Profile"
      />
    </div>
  );
}

export default Navbar;
