import React from 'react';
import styled from 'styled-components';
import { Container } from './PagesStyles';
import Catch22 from '../../catch22.jpg';

const Content = styled.div`
	width: 100%;
	outline: 1px dashed red;
`;

const SubContainer = styled(Container)`
    max-width: 100%;
    margin: 1rem 0;
    padding: 1rem 0;
    background-color: #f6f6f7;

    > h2 {
        text-align: center;
    }
`;

const Collaboration = styled.div`
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	gap: 10px;

	.col-card {
		margin: 0 auto;
		grid-column: 1/9;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: left;
	}

	.col-card-info {
		padding-top: 25px;
		padding-left: 10px;
		> h3,
		p {
			margin-bottom: 10px;
		}
	}
`;

const Collaborations = () => {
	return (
		<Content>
			<SubContainer>
				<h2>Collaborations</h2>
			</SubContainer>
			<Container>
				<Collaboration>
					<div className="col-card">
						<div className="col-card-img">
							<img src={Catch22} alt="poster movie" />
						</div>
						<div className="col-card-info">
							<h3>Emanuela Naccarati</h3>
							<p>Fabric Consultant Costume P.A.</p>
						</div>
					</div>
				</Collaboration>
			</Container>
		</Content>
	);
};

export default Collaborations;
