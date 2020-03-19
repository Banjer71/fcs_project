import React from 'react';
import { Slide } from 'react-slideshow-image';

import './slideshow.css';

const properties = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	arrows: true,
	pauseOnHover: true,
	onChange: (oldIndex, newIndex) => {
		console.log(`slide transition from ${oldIndex} to ${newIndex}`);
	}
};

const Slideshow = ({ image1, image2, image3, image4, image5, image6, image7, image8 }) => {
	return (
		<div className="slide-container">
			<Slide {...properties}>
				<div className="each-slide">
					<div style={{ backgroundImage: `url(${image1})` }} />
				</div>
				<div className="each-slide">
					<div style={{ backgroundImage: `url(${image2})` }} />
				</div>
				<div className="each-slide">
					<div style={{ backgroundImage: `url(${image3})` }} />
				</div>
        <div className="each-slide">
					<div style={{ backgroundImage: `url(${image4})` }} />
				</div>
        <div className="each-slide">
					<div style={{ backgroundImage: `url(${image5})` }} />
				</div>
        <div className="each-slide">
					<div style={{ backgroundImage: `url(${image6})` }} />
				</div>
        <div className="each-slide">
					<div style={{ backgroundImage: `url(${image7})` }} />
				</div>
        <div className="each-slide">
					<div style={{ backgroundImage: `url(${image8})` }} />
				</div>
			</Slide>
		</div>
	);
};

export default Slideshow;
