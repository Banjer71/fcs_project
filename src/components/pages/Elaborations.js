import React from 'react';
import styled from 'styled-components';
import { Container, SlideCard } from './PagesStyles';
import Slideshow from '../SlideShow';
import styles from '../slideshow.css'

const embroidery = [
	'/assets/embroidery/bordeaux.jpg',
	'/assets/embroidery/reding.jpg',
	'/assets/embroidery/tasca.jpg'
];
const Content = styled.div`width: 100%;`;

const ContainerTwo = styled(Container)`

@media screen and (min-width: 960px) {
	margin-top: 150px;

}
	`;

const Elaborations = () => {
	return (
		<Content>
			<ContainerTwo>
				<h3>Embroidery Effect</h3>

				<Slideshow image={embroidery} className='emb' />
			</ContainerTwo>
		</Content>
	);
};

export default Elaborations;
