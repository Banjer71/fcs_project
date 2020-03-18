import React from 'react';
import styled from 'styled-components';
import { Container } from './PagesStyles';

const FooterText = styled.div`
	background-color: #313539;
	color: #acaeaf;
	font-size: 0.7rem;
	margin-top: 3rem;
	padding: 1rem;
`;

const FooterContainer = styled(Container)`
text-align: center;
     > a {
         color: #acaeaf;
         
     }
`;

const Footer = () => {
	return (
		<FooterText>
			<FooterContainer>
				© 2020 <a href="http://fabricservices.it/en/home-en/">FCS Fabric Consulting Services</a>
			</FooterContainer>
		</FooterText>
	);
};

export default Footer;
