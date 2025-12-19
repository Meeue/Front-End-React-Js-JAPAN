import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkStyle = {
    color: scrolled ? '#FFFFFF' : '#000000',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const handleMouseOver = (e) => {
    e.target.style.color = '#8E1616';
  };

  const handleMouseOut = (e) => {
    e.target.style.color = scrolled ? '#FFFFFF' : '#000000';
  };

  return (
    <nav style={{
      backgroundColor: scrolled ? '#000000' : '#F8EEDF',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '15px 80px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      transition: 'background-color 0.3s ease',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}>
        <img 
          src="/3.png" 
          alt="Japan Logo" 
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '0',
            objectFit: 'cover',
            
            transition: 'border-color 0.3s ease',
          }}
        />
        <div style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: scrolled ? '#FFFFFF' : '#000000',
          fontFamily: 'Arial, sans-serif',
          transition: 'color 0.3s ease',
        }}>
          JAPAN
        </div>
      </div>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
        gap: '20px',
      }}>
        <li>
          <Link
            to="/"
            style={linkStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={linkStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/gallery"
            style={linkStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="/service"
            style={linkStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={linkStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;