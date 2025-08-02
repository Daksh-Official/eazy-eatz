import React from 'react';
import Slider from 'react-slick';
import './styles/CarouselSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const CarouselSection = () => {
  const images = ['/images/banners/banner1.jpg', '/images/banners/banner2.jpg', '/images/banners/banner3.jpg', '/images/banners/banner4.jpg'
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="carousel-section">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`slide-${index}`} className="carousel-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSection;
