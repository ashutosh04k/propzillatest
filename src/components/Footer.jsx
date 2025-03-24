import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RightArrowIcon } from "../assets/svg";

const Footer = () => {
  return (
    <footer className="text-light py-5" style={{ background: "#19130b", fontFamily: 'Cormorant Garamond' }}>
      <Container>
        <Row className="text-center text-md-start">
          {/* Contact Section */}
          <Col md={3} className="mb-4 mb-md-0">
            <h5>CONTACT</h5>
            <p style={{ color: '#ffffff' }}>The Wadhwa Group</p>
            <p style={{ color: '#c28562' }}>Email<a href="mailto:enquiry@thewadhwagroup.com" className="text-light"> : enquiry@thewadhwagroup.com</a></p>
            <p style={{ color: '#c28562', fontSize: '20px' }}>Toll Free<span className="text-light">: 1800 209 6669</span></p>
          </Col>

          {/* Our Projects Section */}
          <Col md={3} className="mb-4 mb-md-0">
            <h5>OUR PROJECTS</h5>
            <div className="d-flex flex-column flex-md-row gap-3 mt-4">
              {/* Residential Section */}
              <div>
                <h5>Residential</h5>
                <ul className="list-unstyled">
                  <li>TW Gardens</li>
                  <li>Atmosphere O2</li>
                  <li>Wadhwa Wise City</li>
                  <li>Magnolia</li>
                  <li>The Haven</li>
                </ul>
              </div>

              {/* Commercial Section */}
              <div>
                <h5>Commercial</h5>
                <ul className="list-unstyled">
                  <li>Venue 52</li>
                </ul>
              </div>
            </div>
          </Col>

          {/* Useful Links Section */}
          <Col md={3} className="mb-4 mb-md-0">
            <h5>USEFUL LINKS</h5>
            <ul className="list-unstyled">
              <li>Flats for sale in Panvel</li>
              <li>New projects in Panvel</li>
              <li>1 and 2 BHK in Panvel</li>
              <li>2 and 3 BHK in Mulund</li>
              <li>New projects in Mulund</li>
              <li>2 and 3 BHK flat in Kandivali East</li>
            </ul>
          </Col>

          {/* Enquire Section */}
          <Col md={3}>
            <h5>ENQUIRE</h5>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Mobile" />
              </Form.Group>
              <button className="btn btn-outline"><RightArrowIcon /></button>
            </Form>
          </Col>
        </Row>

        {/* Social Media Links */}
        <div className="text-center my-4 mt-16">
          <FaFacebookF className="mx-2"  style={{border:'1px solid #c28562', borderRadius:'20px', width:'30px',height:'30px', padding:'5px'}}/>
          <FaInstagram className="mx-2"  style={{border:'1px solid #c28562', borderRadius:'20px', width:'30px',height:'30px', padding:'5px'}}/>
          <FaYoutube className="mx-2"  style={{border:'1px solid #c28562', borderRadius:'20px', width:'30px',height:'30px', padding:'5px' }}/>
          <FaLinkedinIn className="mx-2"  style={{border:'1px solid #c28562', borderRadius:'20px', width:'30px',height:'30px', padding:'5px'  }}/>
          <FaTwitter className="mx-2" style={{border:'1px solid #c28562', borderRadius:'20px', width:'30px',height:'30px', padding:'5px'  }} />
        </div>

        {/* Copyright Section */}
        <div className="text-center pt-3" style={{ borderTop: "1px solid rgb(97, 94, 94)", letterSpacing: '.2em' }}>
          <p>Copyright © 2024. The Wadhwa Group. All Rights Reserved</p>
          <span className="text-light">Disclaimer</span> | <span className="text-light">Privacy Policy</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
