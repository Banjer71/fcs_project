import styled from 'styled-components';

export const Content = styled.div`width: 100%;`;

export const Container = styled.div`
	padding: 0 .5rem;
	max-width: 1200px;
	margin: 0 auto;
`;

export const MainArticle = styled.article`
	text-align: center;
	border-top: 1px solid rgb(234, 234, 235);
	> h1,
	p {
		padding: 1.2rem 0;
	}

	> p {
		color: #313539;
	}

	> hr {
		max-width: 400px;
		background-color: #eaeaeb;
		border: 0;
		height: 1px;
		margin: 1rem auto;
	}
`;

export const CardSection = styled.div`
	margin: 0 auto;
	padding: 1rem;

	@media screen and (min-width: 680px) {
		display: flex;
	}
`;

export const Card = styled.div`
	margin: 0 auto;
	padding: 1rem 0;
	max-width: 400px;

	> .icon {
		background-color: red;
		width: 70px;
		height: 70px;
		border-radius: 50%;
		margin: 0 auto;
		background-color: #404040;
		position: relative;
	}

	> p {
		font-size: 0.9rem;
		color: #313539;
		line-height: 25px;
	}

	.fa {
		color: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

export const PreFooter = styled.div`
	margin: 0.8rem 0;
	background-color: #f6f6f7;
	text-align: center;

	h1 {
		margin: 0.5rem 0;
		padding: 1rem;
	}

	hr {
		max-width: 400px;
		background-color: #eaeaeb;
		border: 0;
		height: 1px;
		margin: 1rem auto;
	}

	.prefooter-text h3 {
		text-align: center;
	}

	.prefooter-text p {
		margin: 2rem 0;
		font-size: 0.9rem;
		color: #313539;
		line-height: 25px;
		padding: 0 1.4rem;
	}

	.prefooter-text p:last-child {
		padding-bottom: 1.5rem;
	}
`;

export const SlideCard = styled.div`
	position: relative;
	> h3 {
		margin: 15px 0;
		text-align: left;
	}
`;

export const SubContainer = styled(Container)`
	max-width: 100%;
	margin: 1rem 0;
	padding: 1rem 0;
	background-color: #f6f6f7;
	> h2 {
		text-align: center;
	}
`;
