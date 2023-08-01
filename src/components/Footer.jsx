import React from 'react';
import "./footer.css"
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='footer-body'>
      <footer>
        <ul className='social_icon'>
          <li><a href="https://www.facebook.com/profile.php?id=100008189508347" rel="noreferrer" target='_blank'><FaFacebook /></a></li>
          <li><a href="https://twitter.com/home" rel="noreferrer" target='_blank'><FaTwitter /></a></li>
          <li><a href="https://www.linkedin.com/in/k-avinash-049b85247/" rel="noreferrer" target='_blank'><FaLinkedin /></a></li>
          <li><a href="https://github.com/Avinash010400" rel="noreferrer" target='_blank'><FaGithub /></a></li>
        </ul>
        <ul className='menu'>
          <li><Link to="Home" smooth duration={500}>Home</Link></li>
          <li><Link to="About" smooth duration={500}>About</Link></li>
          <li><Link to="Projects" smooth duration={500}>Project</Link></li>
          <li><Link to="Skills" smooth duration={500}>Skills</Link></li>
          <li><Link to="Contact" smooth duration={500}>Contact</Link></li>
        </ul>
        <p>2023 Personal Portfolio | No &#169; copyright, feel free to copy</p>
      </footer>
    </div>
  )
}

export default Footer;