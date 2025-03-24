import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";
import { ArroIcon } from "../assets/svg";

const Hearts = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6 p-0">
          <img
            src="https://www.thewadhwagroup.com/wp-content/uploads/2024/09/index-image.jpg"
            alt="The Wadhwa Group"
            className="img-fluid building-image"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="col-md-6 text-section p-5" style={{background: "url(https://www.thewadhwagroup.com/wp-content/uploads/2021/05/cement-texture.jpg)"}}>
          <h2 className="title" style={{fontFamily:"Cormorant Garamond" , fontSize:"3rem", fontWeight:"300",color:"#000000",letterSpacing:'2px'}}>WE DESIGN YOUR WORLD WITH OUR HEARTS</h2>
          <p className="subtitle" style={{fontFamily:'Raleway',letterSpacing:'.4em'}}>SETTING A STRONG FOUNDATION FOR YOU</p>
          <div className="row">
  <div className="col-md-6">
    <ul className="list-unstyled">
      <li style={{ fontSize: '20px', fontFamily: "Cormorant Garamond", marginBottom: '5px', display: 'flex', alignItems: 'center' }}>
        <ArroIcon style={{ marginRight: '10px' }} />{" "}Impeccable project execution
      </li>
      <li style={{ fontSize: '20px', fontFamily: "Cormorant Garamond", marginBottom: '5px', display: 'flex', alignItems: 'center' }}>
        <ArroIcon style={{ marginRight: '10px' }} />{" "}Transparency in dealings
      </li>
      <li style={{ fontSize: '20px', fontFamily: "Cormorant Garamond", marginBottom: '5px', display: 'flex', alignItems: 'center' }}>
        <ArroIcon style={{ marginRight: '10px' }} />{" "}Litigation-free projects
      </li>
      <li style={{ fontSize: '20px', fontFamily: "Cormorant Garamond", marginBottom: '5px', display: 'flex', alignItems: 'center' }}>
        <ArroIcon style={{ marginRight: '10px' }} />{" "}Positive exit covenants (Institutions, Investors, Customers)
      </li>
    </ul>
  </div>
  <div className="col-md-6">
    <ul className="list-unstyled">
      <li style={{ fontSize: '20px', fontFamily: "Cormorant Garamond", marginBottom: '5px', display: 'flex', alignItems: 'center' }}>
        <ArroIcon style={{ marginRight: '10px' }} />{" "}Strong brand presence & delivery excellence
      </li>
      <li style={{ fontSize: '20px', fontFamily: "Cormorant Garamond", marginBottom: '5px', display: 'flex', alignItems: 'center' }}>
        <ArroIcon style={{ marginRight: '10px' }} />{" "}In-depth due diligence to ensure clear land titles
      </li>
      <li style={{ fontSize: '20px', fontFamily: "Cormorant Garamond", marginBottom: '5px', display: 'flex', alignItems: 'center' }}>
        <ArroIcon style={{ marginRight: '10px' }} />{" "}Design innovation with emphasis on practicality
      </li>
    </ul>
  </div>
</div>
 
          <div className="text-center mt-4">
        <img
          src="https://www.thewadhwagroup.com/wp-content/uploads/2025/02/VENTILIT-Wadhwa-04.jpg"
          alt="signature"
          style={{ width: "200px", height: "auto" }}
        />
      </div>

        </div>
      </div>
    </div>
  );
};

export default Hearts;
