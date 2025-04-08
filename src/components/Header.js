import React from 'react';
import '../styles/Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header>
      <h1>SHIVANGI LUBRICANTS | NARMADAPURAM M.P.</h1>
      <p>Trusted Oils, Reliable Parts. Powering Your Ride.</p>
      <nav>
        <a href="#about">About</a>
        <a href="#products">Our Products</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;