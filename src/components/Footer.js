import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>Eazy <span>Eatz</span></h2>
          <p>Delivering food happiness across the city!</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><FaMapMarkerAlt /> 123 Street, New Delhi</p>
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaEnvelope /> support@eazyeatz.com</p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Eazy Eatz. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
