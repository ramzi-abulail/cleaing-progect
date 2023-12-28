import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img13 from '../img/img13.jpeg';
import img14 from '../img/img14.jpg';
import img15 from '../img/img15.jpg';

const RecentWork = () => {
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
      image: img13,
    },
    {
      image: img14,
    },
    {
      image: img15,
    },
  ];

  return (
    <div className='shadow-2xl mx-6'>
      <div className='text-center font-bold text-3xl pt-8 text-blue-800'>
        <a className=''>Recent Work</a>
      </div>
      <Carousel
        showStatus={false}
        showArrows={false}
        selectedItem={currentSlide}
        onChange={setCurrentSlide}
        className='p-4 mt-8'
        dynamicHeight={true} // Enable dynamic height for responsive images
      >
        {slideContent.map((slide, index) => (
          <div key={index}>
            <div className="relative">
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="w-full h-auto rounded-md" // Responsive image dimensions
              />
              <div
                className="absolute inset-0 bg-black opacity-50 rounded-md" // Overlay
              ></div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RecentWork;
