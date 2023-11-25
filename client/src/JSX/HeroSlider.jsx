import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../CSS/HeroSlider.css'; // Create a separate CSS file for HeroSlider (HeroSlider.css)
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Total number of slides

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
      text: 'Easy Clean',
    },
    {
      image: img2,
      text: 'Professional Work',
    },
    {
      image: img3,
      text: 'Low Price',
    },
  ];

  const slideStyles = {
    position: 'relative',
    width: '100%',
    height: '400px', // Update with your desired height
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    /* Other necessary styles for the hero slide */
    /* Add background shadow overlay */
    ':after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value (0.5) for transparency
    },
  };

  const textOverlayStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
    fontSize: '2em', 
    width: '100%', 
    maxWidth: '100%',
    height: '100%', 
    padding: '170px', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
   
  };
  

  return (
    <div>
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
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSlider;
