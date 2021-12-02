import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../images/logo.png";
import BuyNaya from "../images/buynaya.png";
import "../css/navbar.css";

import Button from "../common/button";

const Example = () => {
  const navBtnStyles = {
    color: "#fff",
    fontSize: "0.8rem",
    width: "8.563rem",
    height: "2.531rem",
    fontWeight: "200",
    borderRadius: "50px",
    border: "2px solid #fff",
  };

  const navLinkStyles = {
    color: "#fff",
    fontSize: "13px",
  };

  const navLinkyStyles = {
    color: "#fff",
    fontSize: "13px",
    opacity: "0%",
  };

  const navLogoStyles = {
    color: "#fff",
    fontSize: "20px"
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="#261E35"
      variant="dark"
      className="m-0"
    >
      <Navbar.Brand href="#home">
        <a style={navLogoStyles} className="navbar-brand" href="https://nayatoken.com">
          <img src={Logo} width={50} height={50} mode='fit' alt="naya-logo" className="me-2" />
          NAYA TOKEN
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link style={navLinkStyles} href="#about">
            About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Nav.Link>
          <Nav.Link style={navLinkStyles} href="#features">
              Features&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Nav.Link>
          <Nav.Link style={navLinkStyles} href="#beginners">
            Beginner's guide&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Nav.Link>
          <Nav.Link style={navLinkStyles} href="#tokenomics">
            Tokenomics&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Nav.Link>
          <Nav.Link style={navLinkStyles} href="#roadmap">
            Roadmap&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Nav.Link>
          <Nav.Link style={navLinkStyles} href="#whitepaper"> Whitepaper</Nav.Link>
          <Nav.Link style={navLinkyStyles} opacity={1} href="#roadmap">
            ap
          </Nav.Link>
          <Nav.Link style={navLinkyStyles} opacity={1} href="#roadmap">
            ap
          </Nav.Link>
          <Nav.Link style={navLinkyStyles} opacity={1} href="#roadmap">
            roadmap
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>
              <Button content="Connect Wallet" buttonStyles={navBtnStyles} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Example;
