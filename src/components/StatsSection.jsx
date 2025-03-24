import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const StatsSection = () => {
  return (
    <Container className="text-center py-5" style={{ background: "url(https://www.thewadhwagroup.com/wp-content/uploads/2021/05/cement-texture.jpg)" }}>
      <Row className="align-items-center">
        <Col md={6} className="mb-4 d-flex flex-column align-items-center">
          <img src="https://www.thewadhwagroup.com/wp-content/uploads/2024/08/1-1.png" 
            className="mb-4 text-secondary" style={{ width: "50px", height: "50px" }} />
          <h2 className="display-4 mt-2" style={{  color: "#c89b7b" }}>5+</h2>
          <p className="text-uppercase text-muted" style={{ color: "#000000", letterSpacing: '.4em', fontSize: '15px' }}>DECADES OF EXPERIENCE IN ICONIC DEVELOPMENTS</p>
        </Col>
        <Col md={6} className="mb-4 d-flex flex-column align-items-center">
          <img src="https://www.thewadhwagroup.com/wp-content/uploads/2024/08/2-1.png" 
            className="mb-4 text-secondary" style={{ width: "50px", height: "50px" }} />
          <h2 className="display-4 mt-2" style={{  color: "#c89b7b" }}>4.1</h2>
          <p className="text-uppercase text-muted" style={{ color: "#000000", letterSpacing: '.4em', fontSize: '15px' }}>Million sq. m. of residential & commercial spaces</p>
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col md={6} className="mb-4 d-flex flex-column align-items-center">
          <img src="https://www.thewadhwagroup.com/wp-content/uploads/2024/08/3-1.png" 
            className="mb-4 text-secondary" style={{ width: "50px", height: "50px" }} />
          <h2 className="display-4 mt-2" style={{  color: "#c89b7b" }}>CONSISTENT</h2>
          <p className="text-uppercase text-muted" style={{ color: "#000000", letterSpacing: '.4em', fontSize: '15px' }}>ACCOLADES FOR LIFE ENHANCEMENT</p>
        </Col>
        <Col md={6} className="mb-4 d-flex flex-column align-items-center">
          <img src="https://www.thewadhwagroup.com/wp-content/uploads/2024/08/4-1.png" 
            className="mb-4 text-secondary" style={{ width: "50px", height: "50px" }} />
          <h2 className="display-4 mt-2" style={{  color: "#c89b7b" }}>STRONG</h2>
          <p className="text-uppercase text-muted" style={{ color: "#000000", letterSpacing: '.4em', fontSize: '15px' }}>ACCOLADES FOR LIFE ENHANCEMENT</p>
        </Col>
      </Row>      

      <Row className="align-items-center">
        <Col md={4} className="mb-4 d-flex flex-column align-items-center">
          <img src="https://www.thewadhwagroup.com/wp-content/uploads/2024/08/5-1.png" 
            className="mb-4 text-secondary" style={{ width: "50px", height: "50px" }} />
          <h2 className="display-4 mt-2" style={{  color: "#c89b7b" }}>35000+</h2>
          <p className="text-uppercase text-muted" style={{ color: "#000000", letterSpacing: '.4em', fontSize: '15px' }}>DELIGHTED CUSTOMERS</p>
        </Col>
        <Col md={4} className="mb-4 d-flex flex-column align-items-center">
          <img src="https://www.thewadhwagroup.com/wp-content/uploads/2024/08/6-2.png" 
            className="mb-4 text-secondary" style={{ width: "50px", height: "50px" }} />
          <h2 className="display-4 mt-2" style={{  color: "#c89b7b" }}>150+</h2>
          <p className="text-uppercase text-muted" style={{ color: "#000000", letterSpacing: '.4em', fontSize: '15px' }}>MNC CLIENTS</p>
        </Col>
        <Col md={4} className="mb-4 d-flex flex-column align-items-center">
          <img src="https://www.thewadhwagroup.com/wp-content/uploads/2024/08/7.png" 
            className="mb-4 text-secondary" style={{ width: "50px", height: "50px" }} />
          <h2 className="display-4 mt-2" style={{  color: "#c89b7b"  }}>250+</h2>
          <p className="text-uppercase text-muted" style={{ color: "#000000", letterSpacing: '.4em', fontSize: '15px' }}>LANDMARKS CREATED</p>
        </Col>
      </Row>
    </Container>
  );
};

export default StatsSection;
