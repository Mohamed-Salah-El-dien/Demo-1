import React from "react";

import pic1 from "../../assets/quality.svg";
import pic2 from "../../assets/coms.svg";
import pic3 from "../../assets/honest.svg";

import "./Traits.css";

const Traits = () => {
  return (
    <div className="traits-container">
      <h1>SO, What Make Us So Special?!</h1>

      <div className="traits">
        <div className="trait">
          <img src={pic1} alt="pic" />

          <h2 className="title">Quality</h2>

          <p>
            Quality is our obsession. We have to provide a top notch work or we
            can't sleep at night.
          </p>

          <h3>Qualitoholics?</h3>
        </div>

        <div className="trait">
          <img src={pic2} alt="pic" />

          <h2 className="title">Communication</h2>

          <p>
            Communication is the key. We communicate with each other, clients,
            random strangers.
          </p>

          <h3>We love communication.</h3>
        </div>

        <div className="trait">
          <img src={pic3} alt="pic" />

          <h2 className="title">Honesty</h2>

          <p>If there's something you need to know, you'll know it.</p>

          <h3>Honesty is the best policy.</h3>
        </div>
      </div>
    </div>
  );
};

export default Traits;
