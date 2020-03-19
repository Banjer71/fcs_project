import React from 'react';
import styled from 'styled-components';
import { Container } from './PagesStyles';
import Slideshow from '../SlideShow';

const Content = styled.div`
	width: 100%;
	outline: 1px dashed red;
`;

const slideImages1 = [
	'/assets/lino/lino.jpg',
	'/assets/lino/lino3.jpg',
	'/assets/lino/lino4.jpg',
	'/assets/lino/lino5.jpg',
	'/assets/lino/shirtman.jpg',
	'/assets/lino/shirtman2.jpg',
	'/assets/lino/shirtman3.jpg'
];
const slideImages2 = [
	'/assets/organdis/org1.png',
	'/assets/organdis/org2.jpg',
	'/assets/organdis/org3.jpg',
	'/assets/organdis/org4.jpg',
	'/assets/organdis/org5.jpg',
	'/assets/organdis/org6.jpg'
];

const slideImages3 = [
	'/assets/technofabrics/orange.jpg',
	'/assets/technofabrics/whitesheet.jpg',
	'/assets/technofabrics/techno3.png',
	'/assets/technofabrics/fuxia.png',
	'/assets/technofabrics/techno4.png',
	'/assets/technofabrics/reterossa.jpg',
	'/assets/technofabrics/techno5.png',
	'/assets/technofabrics/techno6.jpg'
]


const Elaborations = () => {
	return (
		<Content>
			<Container>
				<Slideshow
					image1={slideImages1[0]}
					image2={slideImages1[1]}
					image3={slideImages1[2]}
					image4={slideImages1[3]}
					image5={slideImages1[4]}
					image6={slideImages1[5]}
					image7={slideImages1[6]}
				/>
				<Slideshow
					image1={slideImages2[0]}
					image2={slideImages2[1]}
					image3={slideImages2[2]}
					image4={slideImages2[3]}
					image5={slideImages2[4]}
					image6={slideImages2[5]}
				/>
				<Slideshow
					image1={slideImages3[0]}
					image2={slideImages3[1]}
					image3={slideImages3[2]}
					image4={slideImages3[3]}
					image5={slideImages3[4]}
					image6={slideImages3[5]}
					image7={slideImages3[6]}
					image8={slideImages3[7]}
				/>
			</Container>
			<Container />
		</Content>
	);
};

export default Elaborations;
