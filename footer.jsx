import React from "react";
import { Link } from 'react-router-dom';

const styles = {
  footer: {
    backgroundColor: "#000000",
    color: "#F8EEDF",
    padding: "4rem 2rem",
    textAlign: "center",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1.25rem",
    marginBottom: "2rem",
    lineHeight: 1.6,
  },
  links: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "2rem",
    marginBottom: "2rem",
  },
  link: {
    color: "#F8EEDF",
    textDecoration: "none",
    fontSize: "1.125rem",
    transition: "color 0.3s ease",
  },
  linkHover: {
    color: "#E8C999",
  },
  copyright: {
    fontSize: "0.9rem",
    opacity: 0.8,
  },
};

const Footer = () => {
  const handleLinkHover = (e) => {
    e.target.style.color = "#E8C999";
  };

  const handleLinkLeave = (e) => {
    e.target.style.color = "#F8EEDF";
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <h2 style={styles.title}>JAPAN</h2>
        <p style={styles.description}>
          Experience the extraordinary. Discover Japan.
        </p>
        <div style={styles.links}>
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Gallery", path: "/gallery" },
            { name: "Service", path: "/service" },
            { name: "Contact", path: "/contact" }
          ].map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              style={styles.link}
              onMouseOver={handleLinkHover}
              onMouseOut={handleLinkLeave}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <p style={styles.copyright}>
          &copy; 2024 JAPAN. All rights reserved. <br />
          Submitted by Sodusta, Eumee S. BSIT 2-B.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
