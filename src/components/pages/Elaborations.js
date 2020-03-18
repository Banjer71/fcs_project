import React from 'react';
import styled from 'styled-components';
import { Container } from './PagesStyles';

const Content = styled.div`
	width: 100%;
	outline: 1px dashed red;
`;

const Elaborations = () => {
	return (
		<Content>
			<Container>
				<h1>Elaborations</h1>
			</Container>
			<Container />
		</Content>
	);
};

export default Elaborations;
