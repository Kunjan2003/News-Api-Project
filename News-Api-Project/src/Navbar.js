import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    backgroundColor: '#333',
    color: 'white',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <nav style={navStyle}>
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '10px' }}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/contact" style={linkStyle}>Contact Us</Link></li>
        <li><Link to="/about" style={linkStyle}>About Us</Link></li>
        <li><Link to="/admin" style={linkStyle}>Admin</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
