import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.jfif";

import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className={active ? "navbar active" : "navbar"}>
      <div className="main">
        <img src={logo} alt="logo" />

        <div className="right-side">
          <p>Request your quote |</p>

          <FontAwesomeIcon
            className="menu-icon"
            icon={faBars}
            onClick={() => setActive(!active)}
          />
        </div>
      </div>

      <div className="menu">
        <h1 className="link">About</h1>
        <h1 className="link">Services</h1>
        <h1 className="link">Testimonials</h1>
        <h1 className="link">Contact</h1>
      </div>
    </nav>
  );
};

export default Navbar;
