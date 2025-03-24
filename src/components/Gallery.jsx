import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { RightArrowIcon } from "../assets/svg";

const projects = [
  { name: "MAGNOLIA", location: "PANVEL", image: "https://www.thewadhwagroup.com/wp-content/uploads/2021/07/magnolia-list.jpg" },
  { name: "VENUE 52", location: "KHAR WEST", image: "https://www.thewadhwagroup.com/wp-content/uploads/2024/05/venue-52.jpg" },
  { name: "THE HAVEN", location: "PANVEL", image: "https://www.thewadhwagroup.com/wp-content/uploads/2024/05/The-Haven.jpg" },
  { name: "THE RESERVE", location: "PANVEL", image: "https://www.thewadhwagroup.com/wp-content/uploads/2024/09/New-Project-21.jpg" },
  { name: "TULIP APARTMENTS", location: "PANVEL", image: "https://www.thewadhwagroup.com/wp-content/uploads/2024/10/tulip-appartments.jpg" },
  { name: "EVARA", location: "PANVEL", image: "https://www.thewadhwagroup.com/wp-content/uploads/2024/05/the-h.jpg" },
];

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const getImagesPerView = () => {
    if (window.innerWidth < 576) return 1; // Phones
    if (window.innerWidth < 992) return 2; // Tablets
    return 3; // Desktops
  };

  const imagesPerView = getImagesPerView();

  const handlePrev = () =>
    setIndex((prevIndex) => (prevIndex === 0 ? projects.length - imagesPerView : prevIndex - 1));
  
  const handleNext = () =>
    setIndex((prevIndex) => (prevIndex >= projects.length - imagesPerView ? 0 : prevIndex + 1));

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center flex-column">
      <h2 className="mb-4 text-center" style={{ fontSize: "3rem", fontFamily: "Cormorant Garamond", fontWeight: "300" }}>
        CURRENT PROJECTS
      </h2>
      <Row className="align-items-center w-100 px-3">
        <Col xs={2} sm={1} className="text-end">
          <RightArrowIcon style={{ transform: "rotate(180deg)", cursor: "pointer" }} onClick={handlePrev} />
        </Col>
        <Col xs={8} sm={10} className="d-flex justify-content-center">
          <div className="d-flex overflow-hidden w-100" style={{ transition: "transform 0.5s ease-in-out" }}>
            {projects.slice(index, index + imagesPerView).map((project, i) => (
              <div key={i} className="mx-2 text-center" style={{ flex: `0 0 ${100 / imagesPerView}%` }}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="img-fluid rounded mb-3"
                  style={{ width: "100%", height: "300px", objectFit: "cover", transition: "opacity 0.5s ease-in-out" }}
                />
                <h4 className="mb-1" style={{ fontWeight: "bold", fontFamily: "Cormorant Garamond" }}>
                  {project.name}
                </h4>
                <p style={{ letterSpacing: "1px", color: "#d7926b" }}>{project.location}</p>
              </div>
            ))}
          </div>
        </Col>
        <Col xs={2} sm={1} className="text-start">
          <RightArrowIcon style={{ cursor: "pointer" }} onClick={handleNext} />
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
