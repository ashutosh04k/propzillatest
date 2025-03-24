import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaEnvelope, FaMobileAlt, FaCalendar, FaComment, FaBuilding, FaChevronDown } from "react-icons/fa";

const Enquiry = () => {
  return (
    <div className="position-relative w-100" style={{ minHeight: '100vh', padding: '5rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop:'10rem' }}>

      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: "url(https://www.thewadhwagroup.com/wp-content/uploads/2021/05/contact-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      ></div>

      {/* Form Container */}
      <div
        className="container px-3 px-md-5 py-4"
        style={{
          background: "url(https://www.thewadhwagroup.com/wp-content/uploads/2021/05/cement-texture.jpg)",
          maxWidth: "900px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          borderRadius: "5px",
          zIndex: "2",
        }}
      >
        <h2 className="text-center" style={{ letterSpacing: ".3em", fontSize: "28px" }}>REQUEST CALL BACK</h2>
        <p className="text-center text-muted" style={{ letterSpacing: ".2em", fontSize: "15px" }}>PLEASE FILL YOUR DETAILS BELOW</p>
        <form>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text"><FaUser /></span>
                <input type="text" className="form-control" placeholder="First Name" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text"><FaUser /></span>
                <input type="text" className="form-control" placeholder="Last Name" />
              </div>
            </div>
          </div>

          <div className="row g-3 mt-3">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text"><FaMobileAlt /></span>
                <input type="text" className="form-control" placeholder="Mobile" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text"><FaEnvelope /></span>
                <input type="email" className="form-control" placeholder="Email" />
              </div>
            </div>
          </div>

          <div className="row g-3 mt-3">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text"><FaCalendar /></span>
                <input type="date" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group position-relative">
                <span className="input-group-text"><FaBuilding /></span>
                <select className="form-control">
                  <option value="">Interested Projects</option>
                  <option>Project A</option>
                  <option>Project B</option>
                </select>
                <span className="position-absolute end-0 me-3" style={{ top: '50%', transform: 'translateY(-50%)' }}>
                  <FaChevronDown />
                </span>
              </div>
            </div>
          </div>

          <div className="input-group mt-3">
            <span className="input-group-text"><FaComment /></span>
            <textarea className="form-control" rows="3" placeholder="Message"></textarea>
          </div>

          <div className="mt-4 text-center">
            <button
              type="submit"
              className="btn text-white px-4 py-2"
              style={{ background: "#c28562", borderRadius: "0px" }}
            >
              CONTACT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;
