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

    const slideStyles = {
        position: 'relative',
        width: '100%',
        height: '500px', // Update with your desired height
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

    

    return (
        <div className=' shadow-2xl mx-6 '>


            <div className='text-center font-bold text-3xl pt-8 text-blue-500 '>
                    <a className=''> RecentWork </a>
                </div>
            <Carousel
                showStatus={false}
                showArrows={false}
                selectedItem={currentSlide}
                onChange={setCurrentSlide}
                className='p-4 mt-8'
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
                            
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default RecentWork;
