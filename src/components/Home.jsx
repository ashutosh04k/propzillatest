import React, { useState, useEffect } from "react";
import AboutUs from "./Aboutus";
import Gallery from "./Gallery";
import Hearts from "./Hearts";
import Info from "./Info";
import StatsSection from "./StatsSection";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import "bootstrap/dist/css/bootstrap.min.css";
import Award from "./Award";
import Testimonial from "./Testimonilas";
import Enquiry from "./Enquiry";

const Home = () => {

  return (
    <div style={{overflow:"hidden"}}>
      {/* Navbar */}
      <Navbar/>
      <Herosection/>
      <AboutUs />
      <StatsSection />
      <Gallery />
      <Hearts />
      <Award />
      <Info />
      <Testimonial />
      <Enquiry />
      <Footer />
    </div>
  );
};

export default Home;
