import React from "react";
import pic1 from "../../assets/process.svg";

import "./Process.css";

const Process = () => {
  return (
    <div className="process-container">
      <div className="left-side">
        <h1>
          But How Do We Really <span>Work</span> ?
        </h1>

        <img src={pic1} alt="pic" />
      </div>

      <div className="right-side">
        <div className="steps">
          <div className="step">
            <h2>1</h2>

            <div className="text">
              <h3>Investigation</h3>

              <p>
                We ask you some questions in order to understand what you have
                in mind
              </p>
            </div>
          </div>

          <div className="step">
            <h2>2</h2>

            <div className="text">
              <h3>Your Taste</h3>

              <p>
                We show some designs to figure out what you like and what to
                avoid. Let you know what's trending and so.
              </p>
            </div>
          </div>

          <div className="step">
            <h2>3</h2>

            <div className="text">
              <h3>Logo / Brand</h3>

              <p>
                If that's available, you provide us with the logo. If not? no
                problem. We can make you one.
              </p>
            </div>
          </div>

          <div className="step">
            <h2>4</h2>

            <div className="text">
              <h3>Prototype</h3>

              <p>
                Prototypes ( Wireframes ) show you how the site content will
                layout on the page.
              </p>
            </div>
          </div>

          <div className="step">
            <h2>5</h2>

            <div className="text">
              <h3>Design</h3>

              <p>
                Once we have the approved prototype and or wireframes, we start
                designing the pages.
              </p>
            </div>
          </div>

          <div className="step">
            <h2>6</h2>

            <div className="text">
              <h3>Coding & Testing</h3>

              <p>
                We start working on converting the design into a website and we
                will keep you updated.
              </p>
            </div>
          </div>

          <div className="step">
            <h2>7</h2>

            <div className="text">
              <h3>Completed Site</h3>

              <p>
                When the site is complete we deliver the site to your hosting.
              </p>
            </div>
          </div>

          <div className="step">
            <h2>8</h2>

            <div className="text">
              <h3>Follow Ups</h3>

              <p>
                You get 1 month of free support after the website is
                delivered... We got your back.
              </p>
              <h4>And We Are Done ..</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
