import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../CSS/HeroSlider.css';
import img1 from '../img/clean1.jpeg';
import img2 from '../img/clean2.jpeg';
import img3 from '../img/clean4.webp';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 15000); // Change slide every 15 seconds
    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  const slideContent = [
    {
      image: img1,
      text: 'Elevating Cleanliness, Every Detail Matters',
    },
    {
      image: img2,
      text: 'Your Trusted Partners in Cleaning Excellence',
    },
    {
      image: img3,
      text: 'Experience the Clean Difference',
    },
  ];

  const slideStyles = {
    position: 'relative',
    width: '100%',
    height: '30rem',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    ':after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
    },
  };

  const textOverlayStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
    fontSize: '40px',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    padding: '170px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    fontFamily: "'Barlow', sans-serif",


  };


  return (
    <div className=' shadow-2xl mx-6'>
      <Carousel
        showStatus={false}
        showArrows={false}
        selectedItem={currentSlide}
        onChange={setCurrentSlide}
      >
        {slideContent.map((slide, index) => (
          <div key={index}>
            <div
              className="hero-slide"
              style={{
                ...slideStyles,
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="text-overlay" style={textOverlayStyles}>
                <h2>{slide.text}</h2>
              </div>
              <div className="my-4 z-50">
                <Link to={"/ServicesCardHome"}>   <button

                  type="button"
                  className="py-3 mt-20 text-white bg-[#5354a8b0] hover:bg-[#536496] shadow-lg shadow-blue-500/50 dark:shadow-lg  font-medium rounded-lg text-sm px-4 text-center border border-blue-100"
                >
                  OUR SERVICES
                </button></Link>

              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSlider;
