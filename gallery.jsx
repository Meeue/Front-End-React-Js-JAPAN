import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';

const styles = {
  hero: {
    minHeight: "100vh",
    background: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(142, 22, 22, 0.6)), url('/gallery.jpg') center/cover fixed",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#F8EEDF",
    padding: "4rem 2rem",
    position: "relative",
    overflow: "hidden",
  },
  heroContent: {
    zIndex: 2,
    maxWidth: "900px",
  },
  heroTitle: {
    fontSize: "5.5rem",
    fontWeight: "700",
    marginBottom: "1.5rem",
    textShadow: "3px 3px 10px rgba(0,0,0,0.5)",
    letterSpacing: "2px",
    animation: "fadeInDown 1s ease forwards",
  },
  heroSubtitle: {
    fontSize: "1.8rem",
    marginBottom: "2rem",
    color: "#E8C999",
    fontWeight: "300",
    animation: "fadeInUp 1s ease 0.3s forwards",
    opacity: 0,
  },
  heroText: {
    fontSize: "1.2rem",
    maxWidth: "700px",
    lineHeight: "1.8",
    color: "#F8EEDF",
    animation: "fadeInUp 1s ease 0.6s forwards",
    opacity: 0,
    marginBottom: "2.5rem",
  },
  heroButton: {
    padding: "1rem 2.5rem",
    fontSize: "1.1rem",
    backgroundColor: "#8E1616",
    color: "#F8EEDF",
    border: "2px solid #8E1616",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "all 0.4s ease",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "1px",
    animation: "fadeInUp 1s ease 0.9s forwards",
    opacity: 0,
  },
  scrollIndicator: {
    position: "absolute",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    animation: "bounce 2s infinite",
    opacity: 0.7,
  },
  scrollArrow: {
    width: "30px",
    height: "30px",
    border: "2px solid #F8EEDF",
    borderTop: "none",
    borderRight: "none",
    transform: "rotate(-45deg)",
  },

  section: {
    padding: "6rem 2rem",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  sectionHeader: {
    textAlign: "center",
    marginBottom: "4rem",
  },
  sectionTitle: {
    fontSize: "3rem",
    color: "#8E1616",
    fontWeight: "700",
    marginBottom: "1rem",
    position: "relative",
    display: "inline-block",
  },
  sectionSubtitle: {
    fontSize: "1.2rem",
    color: "#000000",
    opacity: 0.7,
    fontWeight: "300",
  },
  titleUnderline: {
    width: "80px",
    height: "4px",
    backgroundColor: "#8E1616",
    margin: "1rem auto",
  },

  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "2rem",
  },
  galleryItem: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "16px",
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    height: "350px",
  },
  galleryImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.6s ease",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(142,22,22,0.9), rgba(0,0,0,0.3))",
    color: "#F8EEDF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "2rem",
    opacity: 0,
    transition: "opacity 0.5s ease",
  },
  overlayTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
  },
  overlayText: {
    fontSize: "0.95rem",
    opacity: 0.9,
  },

  testimonialSection: {
    backgroundColor: "#F8EEDF",
    padding: "6rem 2rem",
  },
  testimonialGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "2.5rem",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  testimonialCard: {
    backgroundColor: "#fff",
    padding: "2.5rem",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    borderTop: "5px solid #8E1616",
    transition: "all 0.4s ease",
    position: "relative",
  },
  quoteIcon: {
    fontSize: "4rem",
    color: "#E8C999",
    opacity: 0.3,
    position: "absolute",
    top: "1rem",
    left: "1.5rem",
  },
  testimonialText: {
    fontStyle: "italic",
    marginBottom: "1.5rem",
    fontSize: "1.1rem",
    lineHeight: "1.8",
    position: "relative",
    zIndex: 1,
  },
  testimonialAuthor: {
    fontWeight: "700",
    color: "#8E1616",
    fontSize: "1.1rem",
  },
  testimonialRole: {
    fontSize: "0.9rem",
    color: "#000",
    opacity: 0.6,
    marginTop: "0.3rem",
  },

  cta: {
    background: "linear-gradient(135deg, #8E1616 0%, #000000 100%)",
    color: "#F8EEDF",
    padding: "6rem 2rem",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  ctaContent: {
    maxWidth: "800px",
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },
  ctaTitle: {
    fontSize: "3rem",
    marginBottom: "1.5rem",
    fontWeight: "700",
  },
  ctaText: {
    fontSize: "1.3rem",
    marginBottom: "2.5rem",
    lineHeight: "1.8",
    opacity: 0.9,
  },
  ctaButton: {
    padding: "1.2rem 3rem",
    fontSize: "1.1rem",
    backgroundColor: "#F8EEDF",
    color: "#8E1616",
    border: "2px solid #F8EEDF",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "all 0.4s ease",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
};

const galleryImages = [
  { src: "/tem.gif", label: "Kyoto Temples", desc: "Ancient serenity" },
  { src: "/cherry.gif", label: "Cherry Blossoms", desc: "Spring's beauty" },
  { src: "/templ.gif", label: "Traditional Streets", desc: "Historic charm" },
  { src: "/dress.gif", label: "Festivals", desc: "Cultural celebration" },
  { src: "/fuji.gif", label: "Mount Fuji", desc: "Iconic majesty" },
  { src: "/archi.gif", label: "Japan Architecture", desc: "Timeless design" },
  { src: "/modern.gif", label: "Modern Tokyo", desc: "Urban energy" },
  { src: "/shibuya.gif", label: "Shibuya Crossing", desc: "City pulse" },
];

const testimonials = [
  { 
    text: "Japan changed the way I see beauty and tradition. Every moment felt like stepping into a living artwork.", 
    author: "Eumee S.",
    role: "Travel Photographer"
  },
  { 
    text: "Every street felt like a story waiting to be told. The blend of ancient and modern is simply mesmerizing.", 
    author: "Naruto U.",
    role: "Cultural Explorer"
  },
  { 
    text: "An unforgettable journey of culture and serenity. Japan exceeded every expectation I had.", 
    author: "Cardo D.",
    role: "Adventure Traveler"
  },
];

const Gallery = () => {
  const heroRef = useRef();
  const galleryRef = useRef();
  const testimonialRef = useRef();
  const ctaRef = useRef();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (galleryRef.current) observer.observe(galleryRef.current);
    if (testimonialRef.current) observer.observe(testimonialRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => observer.disconnect();
  }, []);

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }
        
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .gallery-item:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(142,22,22,0.3);
        }
        
        .gallery-item:hover .gallery-image {
          transform: scale(1.15);
        }
        
        .gallery-item:hover .overlay {
          opacity: 1;
        }
        
        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(142,22,22,0.15);
        }
        
        .hero-button:hover {
          background-color: transparent;
          color: #F8EEDF;
          transform: scale(1.05);
        }
        
        .cta-button:hover {
          background-color: transparent;
          color: #F8EEDF;
          transform: scale(1.08);
        }
        
        @media (max-width: 768px) {
          .hero-title { font-size: 3rem !important; }
          .hero-subtitle { font-size: 1.3rem !important; }
          .section-title { font-size: 2rem !important; }
          .cta-title { font-size: 2rem !important; }
        }
      `}} />

      {/* Hero Section - Improved */}
      <section ref={heroRef} style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle} className="hero-title">Gallery</h1>
          <p style={styles.heroSubtitle} className="hero-subtitle">
            ギャラリー
          </p>
          <p style={styles.heroText}>
            A visual journey through Japan's landscapes, traditions, and timeless beauty. 
            Discover the essence of a nation where every moment tells a story.
          </p>
          <button 
            className="hero-button"
            style={styles.heroButton}
            onClick={scrollToGallery}
          >
            Explore Gallery
          </button>
        </div>
        
        <div style={styles.scrollIndicator}>
          <div style={styles.scrollArrow}></div>
        </div>
      </section>

      {/* Gallery Section - Enhanced */}
      <section ref={galleryRef} style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Moments of Japan</h2>
          <div style={styles.titleUnderline}></div>
          <p style={styles.sectionSubtitle}>
            Captured memories from the Land of the Rising Sun
          </p>
        </div>
        <div style={styles.galleryGrid}>
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="gallery-item"
              style={styles.galleryItem}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img 
                src={img.src} 
                alt={img.label} 
                className="gallery-image"
                style={styles.galleryImage} 
              />
              <div 
                className="overlay" 
                style={{
                  ...styles.overlay,
                  opacity: hoveredIndex === idx ? 1 : 0
                }}
              >
                <div style={styles.overlayTitle}>{img.label}</div>
                <div style={styles.overlayText}>{img.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials - Enhanced */}
      <section ref={testimonialRef} style={styles.testimonialSection}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>What Visitors Say</h2>
          <div style={styles.titleUnderline}></div>
          <p style={styles.sectionSubtitle}>
            Real experiences from travelers who discovered Japan
          </p>
        </div>
        <div style={styles.testimonialGrid}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card" style={styles.testimonialCard}>
              <div style={styles.quoteIcon}>"</div>
              <p style={styles.testimonialText}>{t.text}</p>
              <div style={styles.testimonialAuthor}>{t.author}</div>
              <div style={styles.testimonialRole}>{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA - Enhanced */}
      <section ref={ctaRef} style={styles.cta}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Share Your Japan Story</h2>
          <p style={styles.ctaText}>
            Have photos or stories from Japan? Let's collaborate and inspire others 
            to discover the magic of this incredible country.
          </p>
          <Link to="/contact">
            <button
              className="cta-button"
              style={styles.ctaButton}
            >
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Gallery;