import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css"; 
import { RightArrowIcon } from "../assets/svg";

const AboutUs = () => {
  return (
    <div className="container my-5" style={{ fontFamily: 'Cormorant Garamond' }}>
      <div className="row align-items-center">
        {/* Left Section - Text Content */}
        <div className="col-md-5 px-4 px-md-0">
          <h2 className="display-3 text-uppercase" style={{ fontWeight: '100', letterSpacing: '0.2em' }}>
            A Brief <br /> About Us
          </h2>
          <p>
            <b>The Wadhwa Group</b> carries a rich legacy of 5+ decades built on the trust and belief of our customers and stakeholders. The group is one of Mumbai’s leading real estate companies with 250+ landmarks and is currently developing residential, commercial, and township projects spread across approximately 4.1 Million Sq.M.
          </p>
          <p className="text-[1.5rem]">
            Timely completion of projects coupled with strong planning and design innovation gives the group an edge over its competitors. As an organization, the group is also known for its employee-friendly and professional working environment. Today, the group’s clientele comprises over 35,000+ satisfied customers and over 150+ MNCs.
          </p>
          <RightArrowIcon />
        </div>

        {/* Right Section - Images */}
        <div className="col-md-6 position-relative d-flex justify-content-center align-items-center">
          {/* Large Image */}
          <img
            src="https://www.thewadhwagroup.com/wp-content/uploads/2021/07/home-about1.jpg"
            alt="Office Interior"
            className="img-fluid rounded shadow-lg main-image"
          />
          {/* Small Overlay Image */}
          <img
            src="https://www.thewadhwagroup.com/wp-content/uploads/2024/09/platina.jpg"
            alt="Corporate Building"
            className="img-fluid rounded shadow-lg overlay-image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
