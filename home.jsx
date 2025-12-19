import React, { useEffect, useRef, useState } from "react";

const styles = {
  hero: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "4rem 2rem",
    background: 'linear-gradient(rgba(0,0,0,0.5), rgba(142,22,22,0.4)), url("/hero.gif") center/cover fixed',
    color: "#F8EEDF",
    position: "relative",
  },
  heroContent: {
    maxWidth: "1000px",
    zIndex: 2,
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
  },
  title: {
    fontSize: "7rem",
    fontWeight: "700",
    marginBottom: "1.5rem",
    textShadow: "4px 4px 12px rgba(0,0,0,0.6)",
    letterSpacing: "3px",
    animation: 'fadeInDown 1s ease-out forwards',
  },
  subtitle: {
    fontSize: "2.2rem",
    color: "#E8C999",
    marginBottom: "2rem",
    fontWeight: "300",
    animation: 'fadeInUp 1s ease-out 0.3s forwards',
    opacity: 0,
  },
  description: {
    fontSize: "1.3rem",
    marginBottom: "3rem",
    color: "#F8EEDF",
    lineHeight: "1.8",
    maxWidth: "800px",
    margin: "0 auto 3rem",
    animation: 'fadeInUp 1s ease-out 0.6s forwards',
    opacity: 0,
  },
  ctaButton: {
    display: "inline-block",
    backgroundColor: "#8E1616",
    color: "#F8EEDF",
    padding: "1.2rem 3rem",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: "1.1rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
    transition: "all 0.4s ease",
    border: "2px solid #8E1616",
    animation: 'fadeInUp 1s ease-out 0.9s forwards',
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
    display: "flex",
    justifyContent: "center",
  },
  darkSection: {
    background: "linear-gradient(135deg, #000000 0%, #1a0000 100%)",
    color: "#F8EEDF",
  },
  goldSection: {
    background: "linear-gradient(135deg, #E8C999 0%, #d4b886 100%)",
  },
  lightSection: {
    backgroundColor: "#F8EEDF",
  },
  contentGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "4rem",
    alignItems: "center",
  },
  contentCard: {
    padding: "2rem",
    opacity: 0,
    transform: "translateY(40px)",
    transition: "all 0.8s ease-out",
  },
  contentCardVisible: {
    opacity: 1,
    transform: "translateY(0)",
  },
  contentTitle: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "2rem",
    position: "relative",
    paddingBottom: "1rem",
  },
  titleUnderline: {
    width: "80px",
    height: "4px",
    backgroundColor: "#8E1616",
    marginBottom: "2rem",
  },
  contentText: {
    fontSize: "1.2rem",
    marginBottom: "1.5rem",
    lineHeight: 1.9,
  },
  imageContainer: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "20px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
    height: "450px",
    transition: "all 0.4s ease",
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s ease',
  },
  imageOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(142,22,22,0.7), transparent)",
    opacity: 0,
    transition: "opacity 0.4s ease",
    display: "flex",
    alignItems: "flex-end",
    padding: "2rem",
  },
  overlayText: {
    color: "#F8EEDF",
    fontSize: "1.5rem",
    fontWeight: "600",
  },
};

const sections = [
  {
    title: "Rich Cultural Heritage",
    subtitle: "伝統文化",
    text1: "Japan's culture is a beautiful tapestry woven with threads of ancient traditions and modern sensibilities. From the serene tea ceremonies to the vibrant festivals, every aspect reflects a deep respect for heritage and craftsmanship.",
    text2: "Experience the art of ikebana, witness the precision of traditional crafts, and immerse yourself in centuries-old customs that continue to thrive in contemporary Japan.",
    img: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    dark: true
  },
  {
    title: "Breathtaking Landscapes",
    subtitle: "美しい風景",
    text1: "From the snow-capped peak of Mount Fuji to the tropical beaches of Okinawa, Japan's diverse landscapes offer endless beauty and wonder. Cherry blossoms paint the spring in delicate pink, while autumn transforms forests into brilliant gold and crimson.",
    text2: "Discover hidden hot springs nestled in mountain valleys, walk through bamboo forests, and experience the tranquility of traditional Japanese gardens.",
    img: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    light: true
  },
  {
    title: "Innovation & Technology",
    subtitle: "革新技術",
    text1: "Japan stands at the forefront of technological innovation, seamlessly blending cutting-edge advancements with everyday life. From bullet trains that glide at incredible speeds to robots that assist in daily tasks, the future is now.",
    text2: "Experience cities that never sleep, where neon lights illuminate towering skyscrapers and technology enhances every aspect of urban living while maintaining harmony with tradition.",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    gold: true
  },
  {
    title: "Exquisite Cuisine",
    subtitle: "日本料理",
    text1: "Japanese cuisine is a celebration of seasonality, precision, and artistry. Every dish is crafted with meticulous attention to detail, from the freshest sushi to steaming bowls of ramen that warm the soul.",
    text2: "Explore bustling food markets, dine in Michelin-starred restaurants, or discover hidden izakayas where locals gather to share food, drinks, and stories.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    light: true
  },
  {
    title: "Omotenashi Spirit",
    subtitle: "おもてなし",
    text1: "Omotenashi, the Japanese art of hospitality, goes beyond service—it's a heartfelt commitment to anticipating needs and ensuring comfort. This philosophy permeates every interaction, creating unforgettable experiences.",
    text2: "From the moment you arrive, you'll feel the warmth and respect that defines Japanese hospitality, whether staying in a traditional ryokan or exploring bustling city streets.",
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    dark: true
  }
];

const Home = () => {
  const contentRefs = useRef([]);
  const [hoveredImage, setHoveredImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    contentRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      contentRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollToContent = () => {
    const firstSection = document.getElementById('first-section');
    firstSection?.scrollIntoView({ behavior: 'smooth' });
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
        
        .cta-button:hover {
          background-color: transparent;
          color: #F8EEDF;
          transform: scale(1.05);
        }
        
        .image-container:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(142,22,22,0.3);
        }
        
        .image-container:hover .image {
          transform: scale(1.15);
        }
        
        .image-container:hover .image-overlay {
          opacity: 1;
        }
        
        @media (max-width: 968px) {
          .hero-title { font-size: 4rem !important; }
          .hero-subtitle { font-size: 1.5rem !important; }
          .content-grid { grid-template-columns: 1fr !important; }
          .content-title { font-size: 2rem !important; }
        }
        
        @media (max-width: 640px) {
          .hero-title { font-size: 3rem !important; }
          .hero-subtitle { font-size: 1.2rem !important; }
        }
      `}} />

      {/* Hero Section - Enhanced */}
      <section style={styles.hero} id="home">
        <div style={styles.heroContent}>
          <h1 className="hero-title" style={styles.title}>日本</h1>
          <p className="hero-subtitle" style={styles.subtitle}>Discover the Land of the Rising Sun</p>
          <p style={styles.description}>
            Experience the perfect harmony of ancient tradition and modern innovation. 
            Journey through a land where every moment is a blend of timeless beauty and cutting-edge excellence.
          </p>
          <a
            href="#first-section"
            className="cta-button"
            style={styles.ctaButton}
            onClick={(e) => {
              e.preventDefault();
              scrollToContent();
            }}
          >
            Explore Japan
          </a>
        </div>
        
        <div style={styles.scrollIndicator} onClick={scrollToContent}>
          <div style={styles.scrollArrow}></div>
        </div>
      </section>

      {/* Content Sections - Enhanced */}
      {sections.map((section, idx) => (
        <section
          key={idx}
          id={idx === 0 ? "first-section" : undefined}
          style={{
            ...styles.section,
            ...(section.dark ? styles.darkSection : {}),
            ...(section.gold ? styles.goldSection : {}),
            ...(section.light ? styles.lightSection : {})
          }}
        >
          <div style={styles.container}>
            <div className="content-grid" style={styles.contentGrid}>
              {idx % 2 === 0 ? (
                <>
                  <div
                    style={styles.contentCard}
                    ref={(el) => (contentRefs.current[idx * 2] = el)}
                  >
                    <h3 className="content-title" style={{
                      ...styles.contentTitle,
                      color: section.dark ? "#E8C999" : section.gold ? "#000000" : "#000000"
                    }}>
                      {section.title}
                    </h3>
                    <div style={{
                      ...styles.titleUnderline,
                      backgroundColor: section.dark ? "#E8C999" : "#8E1616"
                    }}></div>
                    <p style={{
                      ...styles.contentText,
                      fontSize: "1rem",
                      color: section.dark ? "#E8C999" : section.gold ? "#8E1616" : "#8E1616",
                      fontWeight: "600",
                      marginBottom: "1.5rem"
                    }}>
                      {section.subtitle}
                    </p>
                    <p style={{
                      ...styles.contentText,
                      color: section.dark ? "#F8EEDF" : "#000000"
                    }}>
                      {section.text1}
                    </p>
                    <p style={{
                      ...styles.contentText,
                      color: section.dark ? "#F8EEDF" : "#000000",
                      opacity: 0.8
                    }}>
                      {section.text2}
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={styles.imageContainer}
                    onMouseEnter={() => setHoveredImage(idx)}
                    onMouseLeave={() => setHoveredImage(null)}
                  >
                    <img
                      src={section.img}
                      alt={section.title}
                      className="image"
                      style={styles.image}
                    />
                    <div 
                      className="image-overlay"
                      style={{
                        ...styles.imageOverlay,
                        opacity: hoveredImage === idx ? 1 : 0
                      }}
                    >
                      <div style={styles.overlayText}>{section.title}</div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="image-container"
                    style={styles.imageContainer}
                    onMouseEnter={() => setHoveredImage(idx)}
                    onMouseLeave={() => setHoveredImage(null)}
                  >
                    <img
                      src={section.img}
                      alt={section.title}
                      className="image"
                      style={styles.image}
                    />
                    <div 
                      className="image-overlay"
                      style={{
                        ...styles.imageOverlay,
                        opacity: hoveredImage === idx ? 1 : 0
                      }}
                    >
                      <div style={styles.overlayText}>{section.title}</div>
                    </div>
                  </div>
                  <div
                    style={styles.contentCard}
                    ref={(el) => (contentRefs.current[idx * 2] = el)}
                  >
                    <h3 className="content-title" style={{
                      ...styles.contentTitle,
                      color: section.dark ? "#E8C999" : section.gold ? "#000000" : "#000000"
                    }}>
                      {section.title}
                    </h3>
                    <div style={{
                      ...styles.titleUnderline,
                      backgroundColor: section.dark ? "#E8C999" : "#8E1616"
                    }}></div>
                    <p style={{
                      ...styles.contentText,
                      fontSize: "1rem",
                      color: section.dark ? "#E8C999" : section.gold ? "#8E1616" : "#8E1616",
                      fontWeight: "600",
                      marginBottom: "1.5rem"
                    }}>
                      {section.subtitle}
                    </p>
                    <p style={{
                      ...styles.contentText,
                      color: section.dark ? "#F8EEDF" : "#000000"
                    }}>
                      {section.text1}
                    </p>
                    <p style={{
                      ...styles.contentText,
                      color: section.dark ? "#F8EEDF" : "#000000",
                      opacity: 0.8
                    }}>
                      {section.text2}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;