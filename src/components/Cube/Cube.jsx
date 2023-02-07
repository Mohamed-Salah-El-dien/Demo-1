import React from "react";
import {
  faAngular,
  faCss3,
  faHtml5,
  faJsSquare,
  faShopify,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cube.css";

const Cube = () => {
  return (
    <div className="stage-cube-cont">
      <div className="cube-spinner">
        <div className="face1">
          <FontAwesomeIcon icon={faWordpress} color="#0EE2F1" />
        </div>
        <div className="face2">
          <FontAwesomeIcon icon={faHtml5} color="#F06529" />
        </div>
        <div className="face3">
          <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
        </div>
        <div className="face4">
          <FontAwesomeIcon icon={faShopify} color="#1ED12D" />
        </div>
        <div className="face5">
          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
        </div>
        <div className="face6">
          <FontAwesomeIcon icon={faAngular} color="#EC4D28" />
        </div>
      </div>
    </div>
  );
};

export default Cube;
