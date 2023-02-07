import React from "react";
import pic1 from "../../assets/work1.svg";
import pic2 from "../../assets/work2.svg";
import pic3 from "../../assets/work3.svg";
import pic4 from "../../assets/wordpress.svg";
import pic5 from "../../assets/shopify.svg";

import "./Services.css";

const Services = () => {
  return (
    <div className="service-container">
      <h1>Check Some of our Services</h1>

      <div className="grid">
        <div className="service">
          <h2>Branding and design</h2>
          <p>
            We have a group of creative designers and content creators that can
            brainstorm a lot of ideas with you to provide you with the best
            ideas for branding and designs.
          </p>
          <img src={pic3} alt="" />
        </div>

        <div className="service">
          <h2>WordPress Websites</h2>
          <p>
            With more than 15 years of experience in building WordPress
            websites, we can help you get your WordPress website to perfection.
          </p>
          <img src={pic4} alt="" />
        </div>

        <div className="service">
          <h2>Ecommerce Websites</h2>
          <p>
            Woocommerce, Shopify, Bigcommerce, Magento, or any other E-commerce
            platform. We can help you with all of it.
          </p>
          <img src={pic2} alt="" />
        </div>

        <div className="service">
          <h2>Shopify Websites</h2>
          <p>
            Shopify is one of the great options for selling your products
            online. We can help you set up and configure your shop, design your
            page templates or even integrate your apps or create new ones for
            you from scratch.
          </p>
          <img src={pic5} alt="" />
        </div>

        <div className="service">
          <h2>Web Apps</h2>
          <p>
            From brainstorming, designing, and developing, we can make your web
            app dream a reality.
          </p>
          <img src={pic1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
