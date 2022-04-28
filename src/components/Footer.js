import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="https://www.youtube.com" aria-label="youtube">
        <FaYoutube/>
        {/* <i className="fab fa-youtube"></i> */}
      </a>
      &nbsp; |
      <a href="https://www.instagram.com" aria-label="instagram">
      <FaInstagramSquare/>
      </a>
      &nbsp;|
      <a href="https://www.pinterest.com" aria-label="pinterest">
        <FaPinterest/>
      </a>
      <p>&copy; 2022 Patrick Pang, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
