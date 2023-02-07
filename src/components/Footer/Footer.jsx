import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.jfif";

import "./Footer.css";
import {
  faFacebookSquare,
  faLinkedinIn,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="links">
        <img src={logo} alt="" />
        <p> ABOUT</p> <p> CONTACT</p> <p> TERMS OF SERVICE</p>{" "}
        <p> PRIVACY POLICY</p>
      </div>

      <div className="icons">
        <FontAwesomeIcon icon={faFacebookSquare} className="icon" />
        <FontAwesomeIcon icon={faTwitterSquare} className="icon" />
        <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
      </div>
    </footer>
  );
};

export default Footer;
