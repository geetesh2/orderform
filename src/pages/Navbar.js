import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">APML</div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Orders</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
