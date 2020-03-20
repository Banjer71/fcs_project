import React from 'react';
import styled from 'styled-components';
import { Container } from './PagesStyles';
import Slideshow from '../SlideShow';

const Content = styled.div`
	width: 100%;
`;

const cottonLinen = [
	'/assets/lino/lino.jpg',
	'/assets/lino/lino3.jpg',
	'/assets/lino/lino4.jpg',
	'/assets/lino/lino5.jpg',
	'/assets/lino/shirtman.jpg',
	'/assets/lino/shirtman2.jpg',
	'/assets/lino/shirtman3.jpg'
];

const organdis = [
	'/assets/organdis/org1.png',
	'/assets/organdis/org2.jpg',
	'/assets/organdis/org3.jpg',
	'/assets/organdis/org4.jpg',
	'/assets/organdis/org5.jpg',
	'/assets/organdis/org6.jpg'
];

const technoFabrics = [
	'/assets/technofabrics/orange.jpg',
	'/assets/technofabrics/whitesheet.jpg',
	'/assets/technofabrics/techno3.png',
	'/assets/technofabrics/fuxia.png',
	'/assets/technofabrics/techno4.png',
	'/assets/technofabrics/reterossa.jpg',
	'/assets/technofabrics/techno5.png',
	'/assets/technofabrics/techno6.jpg'
];

const match = [
	'/assets/match/fish.jpg',
	'/assets/match/match1.jpg',
	'/assets/match/match2.jpg',
	'/assets/match/match3.jpg'
];

const jersey = [
	'/assets/jersey/jersy1.jpg',
	'/assets/jersey/jersy2.jpg',
	'/assets/jersey/jersy3.jpg',
	'/assets/jersey/riga4.jpg',
	'/assets/jersey/riga6.jpg'
];

const leather = [
	'assets/leather/blu.jpg',
	'assets/leather/cross.jpg',
	'assets/leather/fiori.jpg',
	'assets/leather/green.jpg',
	'assets/leather/rosa.jpg',
	'assets/leather/yellow.jpg'
];

const SlideCard = styled.div`
	position: relative;
	> h3 {
		margin: 15px 0;
		text-align: left;
	}
`;

// const Caption = styled(SlideCard)`
// 	position: absolute;
// 	width:100%;
// 	height: 48px;
//     bottom: 36px;
// 	left: 0;
// 	background: #000;
//     text-align:center;
//     font-weight:bold;
// 	opacity:0.6;
// 	color: #fff;
// `;

const Fabrics = () => {
	return (
		<Content>
			<Container>
				
				<SlideCard>
                <h3>Cotton/Linen</h3>
					<Slideshow image={cottonLinen} />
					{/* <Caption className="caption">100% Cotton</Caption> */}
				</SlideCard>
				<SlideCard>
					<h3>Organdis</h3>
					<Slideshow image={organdis} />
				</SlideCard>
				<SlideCard>
					<h3>Techno Fabrics</h3>
					<Slideshow image={technoFabrics} />
				</SlideCard>
				<SlideCard>
					<h3>Match</h3>
					<Slideshow image={match} />
				</SlideCard>
				<SlideCard>
					<h3>Jersey</h3>
					<Slideshow image={jersey} />
				</SlideCard>
				<SlideCard>
					<h3>Leather</h3>
					<Slideshow image={leather} />
				</SlideCard>
			</Container>
		</Content>
	);
};

export default Fabrics;
