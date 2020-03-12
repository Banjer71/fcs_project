import React from 'react';
import styled from 'styled-components';
import logo from '../../logo-fcs.jpg';

const Nav = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
`;
const Logo = styled.div`
	cursor: pointer;
	padding: 15px;

	> img {
		width: 90px;
	}
`;

const Navigation = styled.ul`
	display: none;

	@media screen and (min-width: 1024px) {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-left: auto;

		> li {
			margin-left: 10px;
			padding: 15px;
		}

		> li a {
			cursor: pointer;
		}
	}
`;

const NavBar = () => {
	return (
		<Nav>
			<Logo>
				<img src={logo} />
			</Logo>
			<Navigation>
				<li>
					<a>Gallery</a>
				</li>
				<li>
					<a>Elaborations</a>
				</li>
				<li>
					<a>Collaborations</a>
				</li>
				<li>
					<a>Contacts</a>
				</li>
			</Navigation>
		</Nav>
	);
};

export default NavBar;
