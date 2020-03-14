import React, { useState } from 'react';
import logo from '../../logo-fcs.jpg';
import { Nav, Logo, LogoAndBtn, BtnContent, Navigation } from './NavBarStyles';




const NavBar = () => {
	const [ isOpen, setIsOpen ] = useState(false);

	const toggleClickHandler = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Nav>
			<LogoAndBtn>
				<Logo>
					<img src={logo} />
				</Logo>
				<BtnContent onClick={toggleClickHandler}>
					<div className="bar" />
					<div className="bar" />
					<div className="bar" />
				</BtnContent>
			</LogoAndBtn>
			
			<Navigation isOpen={isOpen}>
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
