import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo-fcs.jpg';
import { Nav, Logo, LogoAndBtn, BtnContent, Navigation } from './NavBarStyles';

const NavBar = () => {
	const [ isOpen, setIsOpen ] = useState(false);

	const toggleClickHandler = () => {
		setIsOpen(!isOpen);
	};

	const handleClickItem = () => {
		setIsOpen(false);
	};

	return (
		<Nav>
			<LogoAndBtn>
				<Link to="/" onClick={handleClickItem}>
					<Logo>
						<img src={logo} />
					</Logo>
				</Link>
				<BtnContent onClick={toggleClickHandler}>
					<div className="bar" />
					<div className="bar" />
					<div className="bar" />
				</BtnContent>
			</LogoAndBtn>

			<Navigation isOpen={isOpen}>
				<li>
					<div className='content'>
					<a className="gallery">
						Gallery
						<i class="fa fa-caret-down" />
					</a>
					<ul className="dropdown">
						<li>
							<Link to="/fabrics">Fabrics</Link>
						</li>
						<li>
							<Link to="/privategallery">Private Gallery</Link>
						</li>
					</ul>
					</div>
				</li>
				<li>
					<Link to="/elaborations" onClick={handleClickItem}>
						Elaborations
					</Link>
				</li>
				<li>
					<Link to="/collaborations" onClick={handleClickItem}>
						Collaborations
					</Link>
				</li>
				<li>
					<Link to="contacts" onClick={handleClickItem}>
						Contacts
					</Link>
				</li>
			</Navigation>
		</Nav>
	);
};

export default NavBar;
