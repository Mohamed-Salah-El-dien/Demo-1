import React from "react";
import vid from "../../assets/video.mp4";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="text">
        <p>Everyone has a purpose, and this is ours,</p>
        <div className="title">
          <h2>We Build </h2>
          <h1>Websites</h1>
        </div>
      </div>

      <div className="video-container">
        <video src={vid} loop autoPlay muted type="video/mp4" />
      </div>

      <button className="btn">Get to know us</button>
    </div>
  );
};

export default Hero;
