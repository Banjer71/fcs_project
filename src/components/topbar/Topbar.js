import React from 'react';
import styled from 'styled-components';
import SocialMedia from '../socialmedia/SocialMedia';
import fb_logo from '../../socialicons/facebook.svg';
import inst_logo from '../../socialicons/instagram.svg';

const TopBarSection = styled.div`
	background-color: #313539;
	width: 100%;
	color: #fff;
	font-family: 'Lato', sans-serif;

	@media screen and (min-width: 1024px) {
		width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-items: center;
		justify-content: space-between;
	}
`;

const InnerTopbar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;

	> a {
		margin: 0 5px;
		padding: 5px;
		color: #fff;
		font-size: 12px;
	}
`;

const TopBar = () => {
	return (
		
		<TopBarSection>
			<InnerTopbar>
				<SocialMedia
					icon={fb_logo}
					link="https://www.facebook.com/FCS_Fabric-Consulting-Services-1165916850105637/"
				/>
				<SocialMedia icon={inst_logo} link="https://www.instagram.com/fabric_consulting_services/" />
			</InnerTopbar>
			<InnerTopbar>
				<a href="#">English</a>
				<a href="#">Italian</a>
			</InnerTopbar>
		</TopBarSection>
	);
};

export default TopBar;
