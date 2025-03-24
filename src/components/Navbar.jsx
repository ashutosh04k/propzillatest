import React, { useState } from 'react';
import { SearchIcon, HambergerIcon } from '../assets/svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { X } from 'lucide-react';

const Navbar = () => {
  const [active, setActive] = useState("HOME");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top px-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", height: "100px", width: "100vw" }}>

        <div className="container-fluid d-flex justify-content-between align-items-center w-100">

          {/* Left Side (Search + Links) */}
          <div className="d-none d-md-flex align-items-center" style={{ letterSpacing: "0.2em"}}>
            <div className="me-4 d-none d-lg-block">
              <SearchIcon />
            </div>
            <div className="d-flex ms-4 gap-4">
            {["HOME", "ABOUT US", "DESIGN"].map((item, index) => (
              <a key={index} className={`nav-link text-white position-relative me-4 d-none d-md-block ${active === item ? "active-link" : ""}`}
              href="#"
              onClick={() => setActive(item)}>
                {item}
              </a>
            ))}
            </div>
          </div>

          <div className="text-center mx-4">
            <img src="https://www.thewadhwagroup.com/wp-content/uploads/2025/02/TWG-LOGO-white.png" alt="Logo" style={{ height: "60px" }} />
          </div>

          <div className="d-flex align-items-center justify-content-end gap-4" style={{ letterSpacing: "0.2em"}}>
            {["RESIDENTIAL", "COMMERCIAL", "TOWNSHIP", "REDEVELOPMENT"].map((item, index) => (
              <a key={index} className={`nav-link text-white position-relative me-3 d-none d-lg-block ${active === item ? "active-link" : ""}`}
                href="#"
                onClick={() => setActive(item)}>
                {item}
              </a>
            ))}
            <img src="https://www.thewadhwagroup.com/wp-content/uploads/2021/08/menu-cta-white.png" alt="Contact" style={{ height: "30px" }} className="d-none d-lg-block" />

            {/* Hamburger Icon (Always Visible on Mobile & Tablet) */}
            <HambergerIcon className="text-white ms-3" size={30} onClick={() => setIsOpen(true)} style={{ cursor: "pointer" }} />
          </div>

        </div>
      </nav>

      {/* Sliding Sidebar */}
      <div className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        {/* Close Button */}
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          <X size={28} />
        </button>

        {/* Sidebar Content */}
        <div className="sidebar-content">
          <img src="https://www.thewadhwagroup.com/wp-content/uploads/2025/02/TWG-LOGO-white.png" alt="Logo" className="sidebar-logo" />

          {["Home", "About Us", "Design", "Residential", "Commercial", "Township", "Overview", "Apartments", "Independent Homes", "School", "Senior Living", "NRI Corner", "HR Corner", "Press & Media", "Blog", "Contact Us"].map((item, index) => (
            <a key={index} href="#" className="sidebar-link">{item}</a>
          ))}

          {/* Social Icons */}
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          .active-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -5px;
            width: 100%;
            height: 2px;
            background-color: white;
            transition: width 0.3s ease-in-out;
          }

          /* Sidebar Styles */
          .sidebar {
            position: fixed;
            top: 0;
            right: -400px;
            width: 400px;
            height: 100vh;
            background-color: #1a110b;
            transition: right 0.3s ease-in-out;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 1050;
            box-shadow: -2px 0 10px rgba(0, 0, 0, 0.5);
          }

          .sidebar-open {
            right: 0;
          }

          .close-btn {
            position: absolute;
            top: 15px;
            right: 20px;
            background: none;
            border: none;
            cursor: pointer;
            color: white;
          }

          .sidebar-logo {
            width: 180px;
            height:100px;
            margin-top: 80px;
          }

          .sidebar-link {
            color: white;
            text-decoration: none;
            font-size: 15px;
            padding: 2px 0;
            display: block;
            text-align: center;
            width: 100%;
            font-family: 'Cormorant Garamond', serif;
            transition: color 0.3s;
          }

          .sidebar-link:hover {
            color: #d4a373;
          }

          .social-icons {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 20px;
          }

          .social-icons i {
            color: white;
            font-size: 20px;
            transition: color 0.3s;
          }

          .social-icons i:hover {
            color: #d4a373;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
