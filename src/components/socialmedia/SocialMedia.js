import React from 'react';
import styled from 'styled-components';

const MediaIcon = styled.a`
	> img {
		width: 15px;
	}
`;

const SocialMedia = ({ icon, link }) => {
	return (
		<MediaIcon href={link} target="_alt" rel="noopener noreferrer">
			<img src={icon} alt="facebook icon" />
		</MediaIcon>
	);
};

export default SocialMedia;
