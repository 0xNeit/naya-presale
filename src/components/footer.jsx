import React from "react";
import Button from "../common/button";
import "../css/footer.css";
import Logo from "../images/logo.png";

const Footer = () => {
  const buttonStyles = {
    fontSize: "1.2rem",
    fontWeight: "600",
    fontFamily: "Poppins",
    width: "10rem",
    height: "4.2rem",
    borderRadius: "50px",
    border: "1px solid #fff",
    color: "#fff",
  };
  return (
    <React.Fragment>
      <div className="footer d-lg-flex justify-content-between align-items-start">
        <div className="p-2">
          <h4>Pages</h4>
          <ul>
            <li>
              <a href="https://www.nayatoken.com">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#beginners">Beginners guide</a>
            </li>
            <li>
              <a href="#roadmap">Roadmap</a>
            </li>
            <li>
              <a href="#whitepaper">Whitepaper</a>
            </li>
          </ul>
        </div>

        <div className="p-2">
          <h4>Socials</h4>
          <ul>
            <li>
              <a href=" https://t.me/NayatokenIG">Telegram</a>
            </li>
            <li>
              <a href="https://twitter.com/NayaToken?t=fy0hj1s6hqX-85DkqqkKFQ&s=09">Twitter</a>
            </li>
            <li>
              <a href="https://instagram.com/nayatoken?utm_medium=copy_link">Instagram</a>
            </li>
            <li>
              <a href="https://discord.gg/7kRjDd8E">Discord</a>
            </li>
            <li>
              <a href="https://nayatoken.medium.com">Blog Post</a>
            </li>
          </ul>
        </div>

        <div className="p-2">
          <h4>Newsletter</h4>
          <input placeholder="Your email address" />
          <Button
            className="footer-btn"
            content="Subscribe"
            buttonStyles={buttonStyles}
          />
        </div>
      </div>

      <nav className="footer-navbar navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.nayatoken.com">
            <img src={Logo} alt="naya-logo" className="me-2" />
            NAYA
          </a>
          <p>
            Copyright © 2021 | Designed & Created with love by the NAYA team.
          </p>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Footer;
