import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const features = [
  { icon: <img src="https://www.thewadhwagroup.com/wp-content/uploads/2020/06/icon-img-1.png" className="img-fluid"/>, title: "INNOVATIVE CONSTRUCTION", text: "Use of latest & innovative construction technology" },
  { icon: <img src="https://www.thewadhwagroup.com/wp-content/uploads/2020/06/icon-img-1.png" className="img-fluid"/>, title: "METICULOUS PLANNING", text: "Well planned homes keeping the smallest details in mind" },
  { icon: <img src="https://www.thewadhwagroup.com/wp-content/uploads/2020/06/icon-img-1.png" className="img-fluid"/>, title: "CUSTOMER FIRST", text: "Adopting a customer first approach in everything we do" },
  { icon: <img src="https://www.thewadhwagroup.com/wp-content/uploads/2020/06/icon-img-1.png" className="img-fluid"/>, title: "CONVENIENT LOCATIONS", text: "Thoughtfully selected project locations for utmost convenience" },
  { icon: <img src="https://www.thewadhwagroup.com/wp-content/uploads/2020/06/icon-img-1.png" className="img-fluid"/>, title: "MODERN TECHNOLOGY", text: "Adapting latest technology in our projects" },
  { icon: <img src="https://www.thewadhwagroup.com/wp-content/uploads/2020/06/icon-img-1.png" className="img-fluid"/>, title: "AWARDED DESIGNS", text: "Best designs which are recognized across the industry" }
];

const Info = () => {
  return (
    <Container fluid className="text-center py-5 d-flex align-items-center justify-content-center" style={{ background: "url(https://www.thewadhwagroup.com/wp-content/uploads/2021/05/bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <Row className="w-100 mx-0 px-3">
        {features.map((feature, index) => (
          <Col xs={12} sm={6} md={4} className="mb-4 d-flex justify-content-center" key={index}>
            <div className="p-3 text-light border-0 text-center d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "280px", maxWidth: "320px" }}>
            <div className="mb-3"style={{ padding: '10px', border:  "1px solid rgb(214, 91, 20)", borderRadius: '50px' }}>
              <div className="d-flex align-items-center justify-content-center text-warning rounded-circle" style={{ width: "80px", height: "80px", background: "rgba(87, 85, 83, 0.97)" }}>
                {feature.icon}
              </div>
              </div>
              <Card.Title className="fw-bold fs-5">{feature.title}</Card.Title>
              <Card.Text className="text-secondary text-center mt-2" style={{ fontFamily: "Cormorant Garamond", fontSize: "14px" }}>{feature.text}</Card.Text>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Info;
