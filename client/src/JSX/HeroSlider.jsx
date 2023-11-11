
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../CSS/HeroSlider.css'; // قم بإنشاء ملف CSS خاص بالهيرو (Hero.css)
import img6 from '../img/img6.jpg'
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // عدد الشرائح الإجمالي

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  // const prevSlide = () => {
  //   setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  // };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // تغيير الشريحة كل 3 ثواني
    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return (
    <div>
      <Carousel
        showStatus={false}
        showArrows={false}
        selectedItem={currentSlide}
        onChange={setCurrentSlide}>
        <div>
          <div className="hero-slide" style={{ backgroundImage:[img6] }}>
            <div className="hero-text">
              <h1>Easy to Clean</h1>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
export default HeroSlider;
