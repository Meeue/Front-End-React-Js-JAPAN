import React, { useState, useEffect, useRef } from "react";

const teamMembers = [
  { name: "Aiko Tanaka", role: "Founder & Creative Director", funFact: "Loves Matcha and Cherry Blossoms", image: "/bayi1.jpg", quote: "Bringing Japan's soul to the world" },
  { name: "Kenji Sato", role: "Content Creator", funFact: "Obsessed with Anime & Manga", image: "/laki.jpg", quote: "Stories that inspire and connect" },
  { name: "Yumi Nakamura", role: "Lead Photographer", funFact: "Collects Japanese Sweets", image: "/bay2.jpg", quote: "Capturing moments, preserving memories" },
];

const stats = [
  { label: "Years Exploring Japan", value: 10, suffix: "+" },
  { label: "Articles Published", value: 250, suffix: "+" },
  { label: "Community Members", value: 5000, suffix: "+" },
  { label: "Cities Covered", value: 47, suffix: "" },
];

const awards = [
  { image: "/blog.png", title: "Best Travel Blog 2023", org: "Travel Media Association", year: "2023" },
  { image: "/cul.png", title: "Cultural Excellence Award", org: "Japan Cultural Foundation", year: "2023" },
  { image: "/inov.png", title: "Innovation in Tourism", org: "Global Tourism Board", year: "2024" },
];

const faqData = [
  { 
    question: "What is JAPAN?", 
    answer: "JAPAN is a platform celebrating Japanese culture, experiences, and lifestyle. We provide authentic content about Japan's traditions, modern innovations, travel guides, and cultural insights to help the world connect with this extraordinary country." 
  },
  { 
    question: "Who runs JAPAN?", 
    answer: "A passionate team of Japanese culture enthusiasts, content creators, photographers, and writers who have spent years exploring and documenting Japan's diverse regions, traditions, and contemporary culture." 
  },
  { 
    question: "How often is content updated?", 
    answer: "New articles, images, and features are added multiple times per week. We're constantly exploring new destinations and cultural topics to keep our content fresh and engaging for our community." 
  },
  { 
    question: "Can I contribute to JAPAN?", 
    answer: "Yes! We welcome collaborations with photographers, writers, and Japan enthusiasts. Contact us through our Get in Touch section to discuss partnership opportunities." 
  },
];

const About = () => {
  const [faqOpen, setFaqOpen] = useState(Array(faqData.length).fill(false));
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const intervals = stats.map((stat, index) => {
              const increment = Math.ceil(stat.value / 80);
              return setInterval(() => {
                setCounters(prev => {
                  const newCounters = [...prev];
                  if (newCounters[index] < stat.value) {
                    newCounters[index] = Math.min(newCounters[index] + increment, stat.value);
                  }
                  return newCounters;
                });
              }, 25);
            });
            
            setTimeout(() => {
              intervals.forEach(clearInterval);
            }, 2000);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div style={{ backgroundColor: "#F8EEDF", minHeight: "100vh" }}>
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
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .team-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .team-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 20px 40px rgba(142,22,22,0.25);
        }
        
        .team-image {
          transition: transform 0.4s ease;
        }
        
        .team-card:hover .team-image {
          transform: scale(1.1) rotate(2deg);
        }
        
        .fun-fact {
          transition: opacity 0.4s ease, transform 0.4s ease;
          transform: translateY(10px);
        }
        
        .team-card:hover .fun-fact {
          opacity: 1 !important;
          transform: translateY(0);
        }
        
        .award-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .award-card:hover {
          transform: translateY(-10px) rotate(1deg);
          box-shadow: 0 20px 40px rgba(232,201,153,0.3);
          border-color: #8E1616;
        }
        
        .award-card:hover .award-icon {
          transform: scale(1.2) rotate(10deg);
        }
        
        .award-icon {
          transition: transform 0.4s ease;
        }
        
        .faq-item {
          transition: all 0.3s ease;
        }
        
        .faq-item:hover {
          background-color: #E8C999 !important;
          border-color: #8E1616 !important;
        }
        
        .stat-card {
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
        }
        
        .title-underline {
          width: 80px;
          height: 4px;
          background-color: #8E1616;
          margin: 1rem auto 2rem;
          animation: scaleIn 0.6s ease forwards;
        }
        
        .scroll-indicator {
          animation: bounce 2s infinite;
        }
        
        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem !important; }
          .hero-subtitle { font-size: 1.2rem !important; }
          .section-title { font-size: 2rem !important; }
        }
      `}} />

      {/* Hero Section - Enhanced */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(rgba(0,0,0,0.5), rgba(142,22,22,0.4)), url('/Your paragraph text.gif') center/cover fixed",
        color: "#F8EEDF",
        padding: "5rem 2rem",
        position: "relative",
      }}>
        <div style={{ maxWidth: "900px", zIndex: 2 }}>
          <h1 className="hero-title" style={{
            fontSize: "5rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
            textShadow: "3px 3px 10px rgba(0,0,0,0.5)",
            letterSpacing: "2px",
            animation: "fadeInDown 1s ease-out forwards",
          }}>About JAPAN</h1>
          
          <p className="hero-subtitle" style={{
            fontSize: "1.8rem",
            marginBottom: "1.5rem",
            color: "#E8C999",
            fontWeight: "300",
            animation: "fadeInUp 1s ease-out 0.3s forwards",
            opacity: 0,
          }}>私たちについて</p>
          
          <p style={{
            fontSize: "1.3rem",
            color: "#F8EEDF",
            maxWidth: "700px",
            margin: "0 auto 2rem",
            lineHeight: "1.8",
            animation: "fadeInUp 1s ease-out 0.6s forwards",
            opacity: 0,
          }}>Exploring authentic Japanese culture, one story at a time</p>
          
          <p style={{
            fontSize: "1.1rem",
            color: "#F8EEDF",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.8",
            opacity: 0.9,
            animation: "fadeInUp 1s ease-out 0.9s forwards",
            opacity: 0,
          }}>Our mission is to bring Japan's beauty, traditions, and innovations closer to the world through authentic storytelling and immersive experiences.</p>
        </div>
        
        <div className="scroll-indicator" style={{
          position: "absolute",
          bottom: "30px",
          opacity: 0.7,
        }}>
          <div style={{
            width: "30px",
            height: "30px",
            border: "2px solid #F8EEDF",
            borderTop: "none",
            borderRight: "none",
            transform: "rotate(-45deg)",
          }}></div>
        </div>
      </section>

      {/* Mission Section - Enhanced */}
      <section style={{
        padding: "6rem 2rem",
        backgroundColor: "#F8EEDF",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 className="section-title" style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "#8E1616",
            marginBottom: "0.5rem",
            textAlign: "center",
          }}>Our Story</h2>
          <div className="title-underline"></div>
          <p style={{
            fontSize: "1.2rem",
            lineHeight: 1.9,
            maxWidth: "900px",
            margin: "0 auto 2.5rem auto",
            textAlign: "center",
            color: "#000000",
          }}>
            JAPAN was created out of a deep passion for sharing Japan's authentic experiences with the world. From ancient temples and serene gardens to cutting-edge technology and vibrant street culture, we document the full spectrum of Japanese life.
          </p>
          <p style={{
            fontSize: "1.1rem",
            lineHeight: 1.9,
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
            color: "#000000",
            opacity: 0.8,
          }}>
            Our team has explored every corner of Japan, from Hokkaido's snow-covered landscapes to Okinawa's tropical shores, capturing the essence of what makes this country truly extraordinary.
          </p>
        </div>
      </section>

      {/* Team Section - Enhanced */}
      <section style={{
        padding: "6rem 2rem",
        background: "linear-gradient(135deg, #8E1616 0%, #000000 100%)",
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "#E8C999",
            marginBottom: "0.5rem",
            textAlign: "center",
          }}>Meet the Team</h2>
          <div className="title-underline" style={{ backgroundColor: "#E8C999" }}></div>
          <p style={{
            textAlign: "center",
            color: "#F8EEDF",
            fontSize: "1.2rem",
            marginBottom: "4rem",
            opacity: 0.9,
          }}>The passionate people behind JAPAN</p>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.5rem",
            justifyItems: "center",
          }}>
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="team-card"
                style={{
                  backgroundColor: "#F8EEDF",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  padding: "2.5rem 2rem",
                  textAlign: "center",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  maxWidth: "350px",
                  width: "100%",
                }}
              >
                <div style={{
                  width: "180px",
                  height: "180px",
                  margin: "0 auto 1.5rem",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "5px solid #8E1616",
                  boxShadow: "0 8px 20px rgba(142,22,22,0.3)",
                }}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="team-image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "0.5rem",
                  color: "#000000",
                }}>{member.name}</h3>
                
                <p style={{
                  fontSize: "1.1rem",
                  color: "#8E1616",
                  fontWeight: "600",
                  marginBottom: "0.8rem",
                }}>{member.role}</p>
                
                <p style={{
                  fontSize: "0.95rem",
                  color: "#666",
                  fontStyle: "italic",
                  lineHeight: "1.6",
                }}>"{member.quote}"</p>
                
                <div 
                  className="fun-fact"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, rgba(142, 22, 22, 0.97), rgba(0,0,0,0.95))",
                    color: "#F8EEDF",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "2rem",
                    textAlign: "center",
                    opacity: 0,
                  }}
                >
                  <div style={{
                    fontSize: "3rem",
                    marginBottom: "10px",
                  }}><img src="/fun.png" alt="Fun Fact" style={{ width: "100px", height: "150px", objectFit: "cover", borderRadius: "50%" }} /></div>
                  <div style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}>Fun Fact</div>
                  <div style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.6",
                  }}>{member.funFact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section ref={statsRef} style={{
        padding: "6rem 2rem",
        backgroundColor: "#000000",
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "#E8C999",
            marginBottom: "0.5rem",
            textAlign: "center",
          }}>Our Impact</h2>
          <div className="title-underline" style={{ backgroundColor: "#E8C999" }}></div>
          <p style={{
            textAlign: "center",
            color: "#F8EEDF",
            fontSize: "1.2rem",
            marginBottom: "4rem",
            opacity: 0.9,
          }}>Making a difference in cultural storytelling</p>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
          }}>
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card" style={{
                textAlign: "center",
                padding: "2rem",
                backgroundColor: "rgba(232,201,153,0.1)",
                borderRadius: "15px",
                border: "2px solid #E8C999",
              }}>
                <div style={{
                  fontSize: "4rem",
                  fontWeight: "700",
                  color: "#E8C999",
                  marginBottom: "1rem",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                }}>
                  {counters[idx]}{stat.suffix}
                </div>
                <div style={{ 
                  color: "#F8EEDF", 
                  fontSize: "1.1rem",
                  fontWeight: "500",
                  letterSpacing: "0.5px",
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section - Enhanced */}
      <section style={{
        padding: "6rem 2rem",
        backgroundColor: "#F8EEDF",
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "#8E1616",
            marginBottom: "0.5rem",
            textAlign: "center",
          }}>Awards & Recognition</h2>
          <div className="title-underline"></div>
          <p style={{
            color: "#000000",
            textAlign: "center",
            marginBottom: "4rem",
            fontSize: "1.2rem",
            opacity: 0.8,
          }}>Recognized for excellence in Japanese cultural content and tourism innovation</p>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            justifyItems: "center",
          }}>
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="award-card"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  padding: "3rem 2rem",
                  textAlign: "center",
                  maxWidth: "380px",
                  width: "100%",
                  border: "3px solid #E8C999",
                  position: "relative",
                }}
              >
                <div style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  backgroundColor: "#8E1616",
                  color: "#F8EEDF",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                }}>{award.year}</div>
                
                <div className="award-icon" style={{
                  fontSize: "5rem",
                  marginBottom: "1.5rem",
                  filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
                }}><img src={award.image} alt={award.title} style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "10px" }} /></div>
                
                <div style={{
                  fontWeight: "700",
                  fontSize: "1.4rem",
                  color: "#8E1616",
                  marginBottom: "1rem",
                  lineHeight: 1.3,
                }}>{award.title}</div>
                
                <div style={{
                  fontSize: "1rem",
                  color: "#666",
                  fontStyle: "italic",
                }}>{award.org}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section style={{
        padding: "6rem 2rem",
        backgroundColor: "#000000",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "#E8C999",
            marginBottom: "0.5rem",
            textAlign: "center",
          }}>Frequently Asked Questions</h2>
          <div className="title-underline" style={{ backgroundColor: "#E8C999" }}></div>
          <p style={{
            textAlign: "center",
            color: "#F8EEDF",
            fontSize: "1.2rem",
            marginBottom: "4rem",
            opacity: 0.9,
          }}>Everything you need to know about JAPAN</p>
          
          {faqData.map((item, idx) => (
            <div
              key={idx}
              className="faq-item"
              style={{
                backgroundColor: "#F8EEDF",
                borderRadius: "15px",
                marginBottom: "1.5rem",
                padding: "1.8rem",
                cursor: "pointer",
                border: "2px solid #E8C999",
              }}
              onClick={() => {
                setFaqOpen(prev => {
                  const newState = [...prev];
                  newState[idx] = !newState[idx];
                  return newState;
                });
              }}
            >
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: "700",
                color: "#8E1616",
                fontSize: "1.2rem",
              }}>
                <span>{item.question}</span>
                <span style={{
                  fontSize: "1.5rem",
                  transition: "transform 0.3s ease",
                  transform: faqOpen[idx] ? "rotate(45deg)" : "rotate(0deg)",
                }}>+</span>
              </div>
              <div
                style={{
                  marginTop: faqOpen[idx] ? "1rem" : "0",
                  maxHeight: faqOpen[idx] ? "300px" : "0px",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                  color: "#000000",
                  fontSize: "1.05rem",
                  lineHeight: "1.8",
                  opacity: faqOpen[idx] ? 1 : 0,
                }}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;