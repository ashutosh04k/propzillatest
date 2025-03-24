import React, { useState, useEffect } from 'react';
import { leftImages, rightImages, imageTexts } from './constant';
import { FaWhatsapp } from 'react-icons/fa';
import { RightArrowIcon } from '../assets/svg';

const Herosection = () => {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [slideDirection, setSlideDirection] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setZoom(1);
      setSlideDirection(100);

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % leftImages.length);
        setZoom(1.1);
        setSlideDirection(0);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (dotIndex) => {
    setIndex(dotIndex);
  };

  return (
    <div className="position-relative w-100" style={{ height: '90vh' }}>
      <div className="position-relative w-100 overflow-hidden d-flex flex-md-row flex-column" style={{ height: '90vh' }}>
        <div
          className="w-100 h-100 position-absolute transition d-md-block d-none"
          style={{
            backgroundImage: `url(${leftImages[index]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '50%',
            transform: `scale(${zoom})`,
            transition: 'transform 5s ease-in-out',
          }}
        ></div>

        <div
          className="position-absolute h-100 bg-cover bg-center transition d-md-block d-none"
          style={{
            backgroundImage: `url(${rightImages[index]})`,
            width: '50%',
            right: 0,
            zIndex: 2,
            transform: `translateX(${slideDirection}%)`,
            transition: 'transform 1s ease-in-out',
          }}
        ></div>

        {/* Mobile Layout */}
        <div className="d-md-none d-flex flex-column w-100">
          <div
            className="w-100 h-50"
            style={{
              backgroundImage: `url(${leftImages[index]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '45vh',
              transform: `scale(${zoom})`,
              transition: 'transform 5s ease-in-out',

            }}
          ></div>
          <div
            className="position-absolute h-100 bg-cover bg-center transition d-block d-md-none"
            style={{
              backgroundImage: `url(${rightImages[index]})`,
              width: "100%", // Full width on mobile
              height: "50vh", // Adjust height for better visibility
              bottom: 0, // Position it at the bottom
              zIndex: 2,
              transform: `translateX(${slideDirection}%)`,
              transition: "transform 1s ease-in-out",
            }}
          ></div>

          <div className="d-md-none d-flex flex-column w-100 position-relative">
            <div
              className="w-100"
              style={{
                backgroundImage: `url(${leftImages[index]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                position: "relative",
                zIndex: 1,
              }}
            ></div>
            <div
              className="w-50"
              style={{
                backgroundImage: `url(${rightImages[index]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "150vh",
                position: "absolute",
                top: "0%",
                left: "50%",
                zIndex: 5,
              }}
            ></div>
          </div>


        </div>
      </div>

      <div
        className="position-absolute text-white text-center"
        style={{
          top: '50%',
          left: '45%',
          transform: 'translate(-50%, -50%)',
          width: '50%',
          zIndex: 10,
        }}
      >
        <h1 className="text-white text-[14px] md:text-[12px] sm:text-[10px]" style={{ fontFamily: 'Cormorant Garamond', fontWeight: '300', letterSpacing: '.2em' }}>
          LANDMARKS PLANNED
        </h1>
        <h1 className="text-[48px] text-md-[36px]" style={{ fontFamily: 'Cormorant Garamond', fontWeight: '300' }}>
          WITH PASSION
        </h1>
        <p className="text-white fs-6 fw-light text-uppercase" style={{ letterSpacing: '0.8em' }}>
  TRANSFORMING MUMBAI'S SKYLINE
</p>
        <p className="text-white fs-6 fw-light text-uppercase" style={{ letterSpacing: '.8em' }}>SINCE 1969</p>
      </div>

      <div
        className="position-absolute mb-3 d-md-block d-none"
        style={{ bottom: 0, left: '20%', transform: 'translateX(-50%)', fontFamily: 'Raleway', letterSpacing: '.2em' }}
      >
        <p className="mt-3 text-white">{imageTexts[index]}</p>
      </div>

      <div className="position-absolute bottom-0 start-50 translate-middle-x text-white mb-3 animate-bounce" style={{ zIndex: 30 }}>
        <RightArrowIcon style={{ transform: 'rotate(90deg)' }} />
      </div>

      <div className="position-fixed bottom-0 end-0 m-4 bg-success text-white p-3 rounded-circle shadow-lg" style={{ zIndex: 100 }}>
        <FaWhatsapp className="fs-3" />
      </div>

      <div
        className="position-absolute left-40 top-50 translate-middle-y d-flex flex-md-column flex-column align-items-center"
        style={{ zIndex: 4, paddingLeft: '70px', padding: '5px' }}
      >
        {leftImages.map((_, dotIndex) => (
          <div key={dotIndex} style={{ marginLeft: '50px', margin: '5px', padding: '8px', border: dotIndex === index ? '1px solid rgb(214, 91, 20)' : '', borderRadius: '50px' }}>
            <div
              onClick={() => handleDotClick(dotIndex)}
              className={`dot ${dotIndex === index ? 'active' : ''}`}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: dotIndex === index ? 'rgb(234, 119, 52)' : 'rgba(215, 146, 107, .6)',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Herosection;
