import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "react-bootstrap";
import { RightArrowIcon } from "../assets/svg";
import "bootstrap/dist/css/bootstrap.min.css";

const awards = [
  { image: "https://www.thewadhwagroup.com/wp-content/uploads/2021/05/aw-1.png", title: "REALTY+ CONCLAVE EXCELLENCE AWARDS - 2020 WEST", subtitle: "DESIGN PROJECT OF THE YEAR", project: "ATMOSPHERE O2" },
  { image: "https://www.thewadhwagroup.com/wp-content/uploads/2021/05/aw-2.png", title: "TIMES REALTY ICONS 2020", subtitle: "OUTSTANDING SALES & MARKETING" },
  { image: "https://www.thewadhwagroup.com/wp-content/uploads/2021/05/aw-3.png", title: "THE BEST OF BHARAT AWARDS 2022", subtitle: "PRIDE OF INDIA BRANDS" },
  { image: "https://www.thewadhwagroup.com/wp-content/uploads/2021/05/aw-3.png", title: "INTERNATIONAL PROPERTY AWARDS 2021", subtitle: "BEST COMMERCIAL PROJECT" },
  { image: "https://www.thewadhwagroup.com/wp-content/uploads/2021/05/aw-1.png", title: "NATIONAL REAL ESTATE AWARDS 2023", subtitle: "ICONIC PROJECT OF THE YEAR" },
  { image: "https://www.thewadhwagroup.com/wp-content/uploads/2021/05/aw-2.png", title: "INDIA PROPERTY EXCELLENCE AWARDS 2023", subtitle: "TOP LUXURY HOUSING PROJECT" },
];

const Award = () => {
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const carouselRef = useRef(null);

  // Function to split awards into groups dynamically
  const chunkArray = (arr, size) => {
    return arr.reduce((chunks, item, index) => {
      const chunkIndex = Math.floor(index / size);
      if (!chunks[chunkIndex]) chunks[chunkIndex] = [];
      chunks[chunkIndex].push(item);
      return chunks;
    }, []);
  };

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const slides = chunkArray(awards, itemsPerSlide);

  return (
    <div className="container text-center py-5 position-relative">
      <h2 style={{ fontFamily: "Cormorant Garamond", fontWeight: "300", fontSize: "4rem", color: "#000000" }}>AWARDS</h2>
      <p style={{ fontFamily: "Raleway", letterSpacing: ".4em" }}>Our Accolades over the Years</p>

      <div className="position-relative" style={{ overflow: "visible" }}>
        <Carousel interval={4000} indicators={false} ref={carouselRef} nextLabel="" prevLabel="">
          {slides.map((group, index) => (
            <Carousel.Item key={index}>
              <div className="row justify-content-center" style={{ overflow: "visible" }}>
                {group.map((award, idx) => (
                  <div key={idx} className="col-md-4 d-flex justify-content-center position-relative" style={{ overflow: "visible", paddingTop: "3rem" }}>
                    <img
                      src={award.image}
                      alt="Award"
                      style={{
                        width: "100px",
                        height: "100px",
                        background: 'white',
                        position: "absolute",
                        top: "-40px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 10
                      }}
                    />
                    <div className="text-center p-4 bg-white shadow"
                      style={{ border: '1px solid red', paddingTop: '4rem', width: "100%", position: "relative" }}>
                      <h5 style={{ fontFamily: "Cormorant Garamond", fontWeight: "300", fontSize: "1.5rem", color: "#000000", margin: '40px 0px 10px 0px' }}>{award.title}</h5>
                      <p style={{ fontFamily: "Raleway", letterSpacing: ".2em", fontSize: "1rem", margin: '0px 0px 40px 0px' }}>{award.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Custom Navigation Buttons */}
        <button onClick={() => carouselRef.current.prev()} style={navButtonStyle(false)}>
          <RightArrowIcon />
        </button>
        <button onClick={() => carouselRef.current.next()} style={navButtonStyle(true)}>
          <RightArrowIcon />
        </button>
      </div>
    </div>
  );
};

const navButtonStyle = (isNext) => ({
  position: "absolute",
  top: "50%",
  [isNext ? "right" : "left"]: "-60px",
  transform: isNext ? "translateY(-50%)" : "rotate(180deg) translateY(50%)",
  border: "none",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontSize: "1.5rem",
  cursor: "pointer",
});

export default Award;
