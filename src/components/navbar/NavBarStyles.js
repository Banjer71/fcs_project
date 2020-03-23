import styled, { css } from 'styled-components';

export const BtnContent = styled.div`
	border: 1px solid green;
	display: inline-block;

	> .bar {
		width: 30px;
		margin: 3px;
		height: 4px;
		color: rgb(139, 139, 137);
		background: grey;
	}

	@media screen and (min-width: 780px) {
		display: none;
	}
`;

export const Nav = styled.div`
	max-width: 1200px;
	margin: 0 auto;

	@media screen and (min-width: 780px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

export const LogoAndBtn = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
`;

export const Logo = styled.div`
	cursor: pointer;
	padding: 15px;

	> img {
		width: 90px;
	}
`;

export const Navigation = styled.ul`
	opacity: ${(props) => (props.isOpen ? '1' : '0')};
	display: ${(props) => (props.isOpen ? 'block' : 'none')};
	/* transition: ${(props) => (props.isOpen ? 'all 0.5s ease' : 'none')}; */
	transition: all 0.5s ease;
	
	> li {
		width: 90%;
		margin: 0 auto; 
	}
	
	> li a {
		background-color: rgb(234, 234, 234);
		display: block;
		padding: 10px;
		cursor: pointer;
		margin-bottom: 2px;
	}

	> li a:hover {
		background-color: #efece1;
	}

	.dropdown li{
		padding-left: 20px;
		background-color: rgb(234, 234, 234);
		z-index: 50;
	}

	.fa {
		display: none;
	}

	@media screen and (min-width: 780px) {
		opacity: 1;
		display: flex;
		
		> li a {
			background-color: transparent;
			padding: 20px;
			transition: all 0.5s ease;
		}

		> li a:hover {
			background-color: #efece1;
		}

		.fa {
			display: inline-block;
			margin-left: 5px;
			position: absolute;
		}

		.dropdown {
			display: none;
			position: absolute;
			z-index: 10;
		}

		.content:hover .dropdown {
			display: block;
		}
	}
`;
