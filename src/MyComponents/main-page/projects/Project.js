import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react'
import { useEffect, useRef, useState } from "react";
import Slider from 'react-slick';
import './Project.scss'

const Project = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };
      const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

    return (
        <section id="projects">
            <div className="custom-container">
                <div ref={ref} className={`scroll-fade-in projects ${isVisible ? "visible" : ""}`}>
                <h1 className="mainheading">MY PROJECTS</h1>
                
                <Slider {...settings}>
                    <div className='sliderimg'><img className='img-fluid' src="/assets/StableNFT.png" alt="" /></div>
                    <div className='sliderimg'><img className='img-fluid' src="/assets/CryptoNames.png" alt="" /></div>
                    <div className='sliderimg'><img className='img-fluid' src="/assets/OlympusAI.png" alt="" /></div>
                    <div className='sliderimg'><img className='img-fluid' src="/assets/Tomi.png" alt="" /></div>
                </Slider>
                </div>
            </div>

        </section>
    )
}

export default Project