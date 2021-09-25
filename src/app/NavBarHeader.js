import React, { useRef, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";

function NavBarHeader({ timeline }) {
  let logo = useRef(null);
  let menu_items = useRef(null);
  useEffect(() => {
    timeline.from(logo, {
      duration: 1,
      opacity: 0,
      y: 100,
    });
    timeline.from(
      menu_items,
      {
        duration: 1,
        opacity: 0,
        y: 100,
      },
      "-=.5"
    );
  });
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="Black" variant="dark">
        <Container>
          <Navbar.Brand href="#home" ref={(el) => (logo = el)}>
            Ayad
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" ref={(el) => (menu_items = el)}>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#second">Work</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBarHeader;
