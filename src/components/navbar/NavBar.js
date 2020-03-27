import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-fcs.jpg";
import {
  Nav,
  NavArea,
  Logo,
  LogoAndBtn,
  BtnContent,
  Navigation
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
            <div className="content">
              <a className="gallery">
                Gallery
                <i class="fa fa-caret-down" />
              </a>
              <ul className="dropdown">
                <li>
                  <Link to="/fabrics" onClick={handleClickItem}>
                    Fabrics
                  </Link>
                </li>
                <li>
                  <Link to="/privategallery" onClick={handleClickItem}>
                    Private Gallery
                  </Link>
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
    </NavArea>
  );
};

export default NavBar;
