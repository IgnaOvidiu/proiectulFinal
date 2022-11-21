//  Footer component \\

import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className={styles.footer__logo}>
        <span>DEVFLIX</span> by Igna Ovidiu
      </a>

      <ul className={styles.permalinks}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Details</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Contact</a>
        </li>
        <li>
          <a href="#testimonials">Terms and Conditions</a>
        </li>
        <li>
          <a href="#contact">Report A Problem</a>
        </li>
      </ul>

      <div className={styles.footer__socials}>
        <a href="https://facebook.com">
          <BsFacebook />
        </a>
        <a href="https://instagram.com">
          <BsInstagram />
        </a>
        <a href="https://twitter.com">
          <BsTwitter />
        </a>
      </div>

      <div className={styles.footer__copyright}>
        <small>&copy;Igna Ovidiu. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
