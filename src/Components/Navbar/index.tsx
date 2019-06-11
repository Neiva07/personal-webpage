import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";

const index = () => {
  const NavLink = styled(AnchorLink)``;
  const NavbarContainer = styled.div`
    /* position: fixed; */
    /* top: 0; */
  `;
  return (
    <NavbarContainer>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
              alt="bulma img"
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
            <NavLink href="#experience" className="navbar-item">
              Experience
            </NavLink>
            <NavLink href="#projects" className="navbar-item">
              Projects
            </NavLink>
            <NavLink href="#contact" className="navbar-item">
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </NavbarContainer>
  );
};

export default index;
