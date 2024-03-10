import React from "react";
import { Slide } from "react-slideshow-image";

import "./slideshow.css";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const Slideshow = ({ image, className }) => {
  return (
    <div className={`slide-container ${className}`}>
      <Slide {...properties}>
        {image.map((item, index) => (
          <div className={`each-slide ${className}`} key={index}>
            <div style={{ backgroundImage: `url(${item})` }} />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
