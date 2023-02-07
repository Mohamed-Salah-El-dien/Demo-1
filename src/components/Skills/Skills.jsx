import React from "react";

import pic1 from "../../assets/pic1.svg";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="text">
        <h1>
          Know More About <br /> Our <span>Company</span>
        </h1>
        <p>
          We care about our work quality more than anything else. You could say
          that we are a bunch of quality hungry monsters or quality obsessed
          monkeys
        </p>
        <h3>We love what we do. This is why we do it.</h3>
      </div>

      <div className="img-container">
        <img src={pic1} alt="" />
      </div>
    </div>
  );
};

export default Skills;
