import React from "react";
import { Footer } from "./styles";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const PageFooter = () => {
  return (
    <Footer>
      <div className="first-line">
        <p>Ready to get started?</p>
        <button>Get Started</button>
      </div>

      <div className="mid-line">
        <div className="news">
          <h2>
            Subscribe to our
            <br /> newsletter
          </h2>
          <div>
            <input type="email" placeholder="Email adress" />
            <button type="button">&gt;</button>
          </div>
        </div>
        <div className="services">
          <h2>Services</h2>
          <a href="##">Email Marketing</a>
          <a href="##">Campaigns</a>
          <a href="##">Branding</a>
          <a href="##">Offline</a>
        </div>
        <div className="about">
          <h2>About</h2>
          <a href="##">Our Story</a>
          <a href="##">Benefits</a>
          <a href="##">Team</a>
          <a href="##">Careers</a>
        </div>
        <div className="help">
          <h2>Help</h2>
          <a href="##">FAQs</a>
          <a href="##">Contact US</a>
        </div>
      </div>

      <div className="bottom-line">
        <span>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </span>
        <span>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </span>
      </div>
    </Footer>
  );
};

export default PageFooter;
