import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import logo from "../images/logo-fcs.jpg";
import {
  Nav,
  NavArea,
  Logo,
  LogoAndBtn,
  BtnContent,
  Navigation,
} from "./NavBarStyles";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleClickHandler = () => {
    setIsOpen(!isOpen);
  };

  const handleClickItem = () => {
    setIsOpen(false);
  };

  window.addEventListener("scroll", () => {
    let menuArea = document.querySelector(".menu-area");
    if (window.pageYOffset > 150) {
      menuArea.classList.add("slide-menu");
    } else {
      menuArea.classList.remove("slide-menu");
    }
  });

  return (
    <NavArea className="menu-area">
      <Nav>
        <LogoAndBtn>
          <Link to="/" onClick={handleClickItem}>
            <Logo>
              <img src={logo} alt="logo" />
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
            <div className="content">
              <a className="gallery">
                <FormattedMessage id="gallery" />
                <i class="fa fa-caret-down" />
              </a>
              <ul className="dropdown">
                <li>
                  <Link to="/fabrics" onClick={handleClickItem}>
                    <FormattedMessage id="fabrics" />
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/elaborations" onClick={handleClickItem}>
              <FormattedMessage id="elaborations" />
            </Link>
          </li>
          <li>
            <Link to="/collaborations" onClick={handleClickItem}>
              <FormattedMessage id="collaborations" />
            </Link>
          </li>
          <li>
            <Link to="contacts" onClick={handleClickItem}>
              <FormattedMessage id="contacts" />
            </Link>
          </li>
        </Navigation>
      </Nav>
    </NavArea>
  );
};

export default NavBar;
