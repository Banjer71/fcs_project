import React from 'react';
import styled from 'styled-components';

const ColCard = styled.div`
	margin: 0 auto;
	grid-column: ${(props) => (props.fromCollab ? '1/9' : '1')};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: left;

	.col-card-info {
		padding-top: 25px;
		padding-left: 10px;
		> h3,
		p {
			margin-bottom: 10px;
		}
	}

	.col-card-img img {
		width: 320px;
		height: 460px;
		box-shadow: 3px 3px 5px 0px rgba(50, 50, 50, 0.75);
	}

	@media screen and (min-width: 680px) {
		grid-column: ${(props) => (props.fromCollab ? 'span 4' : '1')};
	}

	@media screen and (min-width: 1024px) {
		grid-column: ${(props) => (props.fromCollab ? 'span 1' : '1')};

		.col-card-img img {
			width: 300px;
			height: 420px;
		}
	}
`;

const Card = (props) => {
	return (
		<ColCard fromCollab={props.fromCollab}>
			<div className="col-card-img">
				<img src={props.image} alt="poster movie" />
			</div>
			<div className="col-card-info">
				<h3>{props.name}</h3>
				<p>{props.company}</p>
			</div>
		</ColCard>
	);
};

export default Card;
