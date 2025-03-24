import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import { TestimonialIcon, RightArrowIcon } from "../assets/svg";
import AboutCompany from "./AboutCompany";

const testimonials = [
  {
    text: "I am really thankful to Wadhwa Group and its team for giving me an opportunity to invest in such a beautiful location. A beautiful mountain with such a greenery around the project provides a feel of a vacation home within the City. We always had a dream to have one house near nature's beauty which came true after taking flat at Wadhwa WiseCity",
    name: "ANUJ PURI",
    position: "FORMER CHAIRMAN & COUNTRY HEAD, JONES LANG LASALLE, INDIA",
    image: "https://www.thewadhwagroup.com/wp-content/uploads/2020/04/testimonial4.png"
  },
  {
    text: "Our family has lived in Ghatkopar for over 3 generations. As the family grew, we needed a bigger home. When we heard about The Address, we realized it was just perfect for our requirement. It is an integrated township where being home itself feels like being on a holiday.",
    name: "JOHN DOE",
    position: "CEO, EXAMPLE CORP",
    image: "https://www.thewadhwagroup.com/wp-content/uploads/2020/04/testimonial1.png"
  },
  {
    text: "It is very clear that they are very transparent. We Enjoy working with them. The Matching of the company DNA with that of the Promotor leads to excellent project execution and customer centricity.",
    name: "JANE SMITH",
    position: "DIRECTOR, BUSINESS GROUP",
    image: "https://www.thewadhwagroup.com/wp-content/uploads/2020/04/testimonial2.png"
  },
  {
    text:
      "Wadhwa group is one of the leading developers known for its quality work and reputation. Wise city was my first flat visit which i saw and immediately booked it without looking out for any other project in the nearby vicinity. This project has a good potential in the coming years",
    name: "HAFEEZ CONTRACTOR",
    position: "DIRECTOR, BUSINESS GROUP",
    image: "https://www.thewadhwagroup.com/wp-content/uploads/2020/04/testimonial3.png"
  }
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container fluid className="text-center py-5 d-flex flex-column align-items-center justify-content-center vh-100 position-relative" style={{ padding: windowWidth < 768 ? "20px" : "50px" }}>
        <div><TestimonialIcon/></div>
        <h2 className="text-uppercase mb-3" style={{ fontFamily: "Cormorant Garamond", fontSize: windowWidth < 768 ? '2.5rem' : '4rem', letterSpacing: '0.1em' }}>Testimonials</h2>
        <p className="mb-4 px-3" style={{ fontFamily: "Cormorant Garamond", fontSize: windowWidth < 768 ? '1rem' : '1.5rem', maxWidth: "800px" }}>
          “{testimonials[index].text}”
        </p>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <img
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className="rounded-circle img-fluid"
            style={{ width: windowWidth < 768 ? "80px" : "100px", height: windowWidth < 768 ? "80px" : "100px" }}
          />
        </div>
        <h5 className="mb-1" style={{ fontSize: windowWidth < 768 ? '1rem' : '1.5rem' }}>{testimonials[index].name}</h5>
        <p className="text-muted small text-center" style={{ fontSize: windowWidth < 768 ? '0.8rem' : '1rem' }}>{testimonials[index].position}</p>
        <Button variant="" className="position-absolute start-0 top-50 translate-middle-y" onClick={() => setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)}>
          <RightArrowIcon style={{ transform: 'rotate(180deg)' }} />
        </Button>
        <Button variant="" className="position-absolute end-0 top-50 translate-middle-y" onClick={() => setIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}>
          <RightArrowIcon />
        </Button>
      </Container>
      <AboutCompany/>
    </>
  );
};

export default Testimonial;
