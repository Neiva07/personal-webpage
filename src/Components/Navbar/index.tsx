import React from "react";
//@ts-ignore
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";

const NavLink = styled(AnchorLink);

const index = () => {
  return (
    <div>
      <nav
        className="navbar"
        role="navigation"
        aria-eact-anchorlabel="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <NavLink href="#about" className="navbar-item">
              About
            </NavLink>
            <NavLink className="navbar-item">Experience</NavLink>
            <NavLink className="navbar-item">Projects</NavLink>
            <NavLink className="navbar-item">Contact</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default index;
