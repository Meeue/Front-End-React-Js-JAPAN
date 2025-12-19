import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

const primaryServices = [
  {
    image: "/virtual.jpg",
    title: "Virtual Japan Tours",
    description: "Experience Japan from anywhere in the world with our immersive virtual tours. Explore Tokyo's bustling streets, Kyoto's ancient temples, and hidden gems with expert guides.",
    features: ["Live Interactive Tours", "360° Virtual Reality", "Expert Local Guides"]
  },
  {
    image: "/workshop.jpg",
    title: "Cultural Workshops",
    description: "Learn traditional Japanese arts and crafts through hands-on workshops. From calligraphy to origami, ikebana to tea ceremony—master authentic techniques.",
    features: ["Traditional Arts", "Expert Instructors", "Small Group Classes"]
  },
  {
    image: "/travel.jpg",
    title: "Personalized Travel Planning",
    description: "Custom itineraries designed around your interests and budget. We handle every detail from accommodations to dining reservations and local experiences.",
    features: ["Custom Itineraries", "Local Insights", "24/7 Support"]
  }
];

const localExperiences = [
  { image: "/tea.jpg", title: "Tea Ceremonies", desc: "Authentic matcha experience" },
  { image: "/kimono.jpg", title: "Kimono Rentals", desc: "Traditional dress experience" },
  { image: "/sushi.jpg", title: "Sushi Classes", desc: "Learn from master chefs" },
  { image: "/templs.jpg", title: "Temple Tours", desc: "Spiritual journey" },
  { image: "/fest.jpg", title: "Festival Access", desc: "Exclusive celebrations" }
];

const businessServices = [
  {
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    title: "Translation Services",
    description: "Professional translation for business documents, websites, and marketing materials with cultural sensitivity and accuracy.",
    details: ["Document Translation", "Website Localization", "Marketing Content"]
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    title: "Business Etiquette Training",
    description: "Master Japanese business culture, etiquette, and communication protocols to build successful partnerships.",
    details: ["Corporate Training", "Cultural Consulting", "Protocol Guidance"]
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    title: "Educational Talks",
    description: "Engaging presentations on Japanese culture, history, and business practices for schools, universities, and organizations.",
    details: ["School Programs", "University Lectures", "Corporate Seminars"]
  }
];

const faqData = [
  {
    question: "How do I book a service?",
    answer: "You can book any of our services by clicking the 'Book Now' button or contacting us through our contact form. We'll respond within 24 hours to confirm availability and discuss your specific needs."
  },
  {
    question: "Can services be customized?",
    answer: "Absolutely! All our services can be tailored to your preferences, schedule, and budget. We specialize in creating personalized experiences that match your interests and goals."
  },
  {
    question: "What languages are available?",
    answer: "Our services are available in English, Japanese, and several other languages upon request. All our guides and instructors are fluent in both English and Japanese."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We offer flexible cancellation up to 48 hours before your scheduled service for a full refund. Cancellations within 48 hours are subject to a 50% fee. Please contact us for special circumstances."
  },
  {
    question: "Do you offer group discounts?",
    answer: "Yes! We offer competitive group rates for parties of 6 or more. Corporate and educational groups receive additional discounts. Contact us for a custom quote."
  }
];

const Service = () => {
  const [faqOpen, setFaqOpen] = useState(Array(faqData.length).fill(false));
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredExperience, setHoveredExperience] = useState(null);
  
  const featuresRef = useRef();
  const localExpRef = useRef();
  const businessRef = useRef();
  const faqRef = useRef();
  const ctaRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    [featuresRef, localExpRef, businessRef, faqRef, ctaRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ backgroundColor: "#F8EEDF" }}>
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .service-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .service-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 50px rgba(142,22,22,0.25);
        }
        
        .service-icon {
          transition: transform 0.4s ease;
        }
        
        .service-card:hover .service-icon {
          transform: scale(1.2) rotate(5deg);
        }
        
        .experience-card {
          transition: all 0.3s ease;
        }
        
        .experience-card:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 30px rgba(142,22,22,0.2);
        }
        
        .business-card {
          transition: all 0.4s ease;
        }
        
        .business-card:hover {
          transform: translateX(10px);
          border-color: #8E1616;
        }
        
        .faq-item {
          transition: all 0.3s ease;
        }
        
        .faq-item:hover {
          background-color: #E8C999 !important;
          border-color: #8E1616 !important;
        }
        
        .cta-button {
          transition: all 0.4s ease;
        }
        
        .cta-button:hover {
          background-color: transparent !important;
          color: #F8EEDF !important;
          transform: scale(1.08);
        }
        
        .scroll-indicator {
          animation: bounce 2s infinite;
        }
        
        .floating-element {
          animation: float 3s ease-in-out infinite;
        }
        
        @media (max-width: 968px) {
          .hero-title { font-size: 3.5rem !important; }
          .section-title { font-size: 2rem !important; }
          .service-grid { grid-template-columns: 1fr !important; }
        }
      `}} />

      {/* Hero Section */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(rgba(0,0,0,0.5), rgba(142,22,22,0.4)), url('/service.gif') center/cover fixed",
        color: "#F8EEDF",
        padding: "5rem 2rem",
        position: "relative",
      }}>
        <div style={{ maxWidth: "1000px", zIndex: 2 }}>
          <h1 className="hero-title" style={{
            fontSize: "5.5rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
            textShadow: "3px 3px 10px rgba(0,0,0,0.5)",
            letterSpacing: "2px",
            animation: "fadeInDown 1s ease-out forwards",
          }}>Our Services</h1>
          
          <p style={{
            fontSize: "1.8rem",
            marginBottom: "1.5rem",
            color: "#E8C999",
            fontWeight: "300",
            animation: "fadeInUp 1s ease-out 0.3s forwards",
            opacity: 0,
          }}>サービス</p>
          
          <p style={{
            fontSize: "1.3rem",
            color: "#F8EEDF",
            maxWidth: "800px",
            margin: "0 auto 2rem",
            lineHeight: "1.8",
            animation: "fadeInUp 1s ease-out 0.6s forwards",
            opacity: 0,
          }}>
            Curated experiences designed to bring the authentic spirit of Japan to you
          </p>
          
          <p style={{
            fontSize: "1.1rem",
            color: "#F8EEDF",
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: "1.8",
            opacity: 0.9,
            animation: "fadeInUp 1s ease-out 0.9s forwards",
            opacity: 0,
          }}>
            From virtual tours and cultural workshops to personalized travel planning and business services—discover how we can help you connect with Japan.
          </p>
        </div>
        
        <div className="scroll-indicator" style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
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

      {/* Primary Services Section */}
      <section ref={featuresRef} style={{ padding: "6rem 2rem", backgroundColor: "#F8EEDF" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2 className="section-title" style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "#8E1616",
            textAlign: "center",
            marginBottom: "0.5rem",
          }}>Core Services</h2>
          <div style={{
            width: "80px",
            height: "4px",
            backgroundColor: "#8E1616",
            margin: "1rem auto 2rem",
          }}></div>
          <p style={{
            textAlign: "center",
            fontSize: "1.2rem",
            color: "#000",
            opacity: 0.8,
            marginBottom: "4rem",
            maxWidth: "700px",
            margin: "0 auto 4rem",
          }}>Choose from our flagship offerings tailored to your needs</p>
          
          <div className="service-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "3rem",
          }}>
            {primaryServices.map((service, idx) => (
              <div
                key={idx}
                className="service-card"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  padding: "3rem 2rem",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  border: "3px solid #E8C999",
                }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-icon" 
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "1.5rem",
                    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
                  }}
                />
                
                <h3 style={{
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  color: "#8E1616",
                  marginBottom: "1rem",
                }}>{service.title}</h3>
                
                <p style={{
                  fontSize: "1.1rem",
                  color: "#000",
                  lineHeight: "1.8",
                  marginBottom: "1.5rem",
                }}>{service.description}</p>
                
                <div style={{
                  borderTop: "2px solid #E8C999",
                  paddingTop: "1.5rem",
                  marginTop: "1.5rem",
                }}>
                  {service.features.map((feature, i) => (
                    <div key={i} style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.8rem",
                      color: "#8E1616",
                      fontWeight: "600",
                    }}>
                      <span style={{ marginRight: "0.5rem" }}>✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button style={{
                  marginTop: "1.5rem",
                  padding: "0.8rem 2rem",
                  backgroundColor: hoveredCard === idx ? "#000" : "#8E1616",
                  color: "#F8EEDF",
                  border: "none",
                  borderRadius: "30px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}>Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Experience Packages */}
      <section ref={localExpRef} style={{
        padding: "6rem 2rem",
        background: "linear-gradient(135deg, #8E1616 0%, #000000 100%)",
        color: "#F8EEDF",
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "#E8C999",
            textAlign: "center",
            marginBottom: "0.5rem",
          }}>Local Experience Packages</h2>
          <div style={{
            width: "80px",
            height: "4px",
            backgroundColor: "#E8C999",
            margin: "1rem auto 2rem",
          }}></div>
          <p style={{
            textAlign: "center",
            fontSize: "1.2rem",
            marginBottom: "4rem",
            opacity: 0.9,
            maxWidth: "800px",
            margin: "0 auto 4rem",
          }}>
            Immerse yourself in authentic Japanese traditions and experiences curated by local experts
          </p>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}>
            {localExperiences.map((exp, idx) => (
              <div
                key={idx}
                className="experience-card floating-element"
                style={{
                  backgroundColor: "#F8EEDF",
                  borderRadius: "15px",
                  padding: "2rem",
                  textAlign: "center",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                  animationDelay: `${idx * 0.1}s`,
                }}
                onMouseEnter={() => setHoveredExperience(idx)}
                onMouseLeave={() => setHoveredExperience(null)}
              >
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "1rem",
                    transform: hoveredExperience === idx ? "scale(1.1)" : "scale(1)",
                    transition: "transform 0.3s ease",
                  }}
                />
                <h4 style={{
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  color: "#8E1616",
                  marginBottom: "0.5rem",
                }}>{exp.title}</h4>
                <p style={{
                  fontSize: "0.95rem",
                  color: "#000",
                  opacity: 0.7,
                }}>{exp.desc}</p>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: "center" }}>
            <button className="cta-button" style={{
              padding: "1.2rem 3rem",
              backgroundColor: "#F8EEDF",
              color: "#8E1616",
              border: "2px solid #F8EEDF",
              borderRadius: "50px",
              fontSize: "1.1rem",
              fontWeight: "700",
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}>View All Experiences</button>
          </div>
        </div>
      </section>

      {/* Business & Educational Services */}
      <section ref={businessRef} style={{ padding: "6rem 2rem", backgroundColor: "#F8EEDF" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "#8E1616",
            textAlign: "center",
            marginBottom: "0.5rem",
          }}>Business & Educational Services</h2>
          <div style={{
            width: "80px",
            height: "4px",
            backgroundColor: "#8E1616",
            margin: "1rem auto 2rem",
          }}></div>
          <p style={{
            textAlign: "center",
            fontSize: "1.2rem",
            color: "#000",
            opacity: 0.8,
            marginBottom: "4rem",
            maxWidth: "800px",
            margin: "0 auto 4rem",
          }}>Professional services for organizations, educators, and businesses</p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {businessServices.map((service, idx) => (
              <div
                key={idx}
                className="business-card"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "15px",
                  padding: "2.5rem",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "2rem",
                  alignItems: "center",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  border: "3px solid #E8C999",
                }}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  style={{
                    width: "200px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
                  }}
                />
                
                <div>
                  <h3 style={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    color: "#8E1616",
                    marginBottom: "1rem",
                  }}>{service.title}</h3>
                  
                  <p style={{
                    fontSize: "1.1rem",
                    color: "#000",
                    lineHeight: "1.8",
                    marginBottom: "1rem",
                  }}>{service.description}</p>
                  
                  <div style={{
                    display: "flex",
                    gap: "1.5rem",
                    flexWrap: "wrap",
                  }}>
                    {service.details.map((detail, i) => (
                      <span key={i} style={{
                        backgroundColor: "#E8C999",
                        color: "#000",
                        padding: "0.5rem 1rem",
                        borderRadius: "20px",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                      }}>{detail}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} style={{
        padding: "6rem 2rem",
        backgroundColor: "#000000",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "#E8C999",
            textAlign: "center",
            marginBottom: "0.5rem",
          }}>Frequently Asked Questions</h2>
          <div style={{
            width: "80px",
            height: "4px",
            backgroundColor: "#E8C999",
            margin: "1rem auto 2rem",
          }}></div>
          <p style={{
            textAlign: "center",
            color: "#F8EEDF",
            fontSize: "1.2rem",
            marginBottom: "4rem",
            opacity: 0.9,
          }}>Everything you need to know about our services</p>
          
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
              <div style={{
                marginTop: faqOpen[idx] ? "1rem" : "0",
                maxHeight: faqOpen[idx] ? "300px" : "0px",
                overflow: "hidden",
                transition: "all 0.4s ease",
                color: "#000",
                fontSize: "1.05rem",
                lineHeight: "1.8",
                opacity: faqOpen[idx] ? 1 : 0,
              }}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} style={{
        padding: "6rem 2rem",
        background: "linear-gradient(135deg, #8E1616 0%, #000000 100%)",
        color: "#F8EEDF",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "3.5rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
          }}>Ready to Begin Your Journey?</h2>
          
          <p style={{
            fontSize: "1.3rem",
            marginBottom: "3rem",
            lineHeight: "1.8",
            opacity: 0.9,
          }}>
            Whether you're planning a trip, seeking cultural experiences, or need business services—we're here to help you connect with Japan in meaningful ways.
          </p>
          
          <div style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}>
            <button className="cta-button" style={{
              padding: "1.2rem 3rem",
              backgroundColor: "#F8EEDF",
              color: "#8E1616",
              border: "2px solid #F8EEDF",
              borderRadius: "50px",
              fontSize: "1.1rem",
              fontWeight: "700",
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}>Book Now</button>
            
            <button className="cta-button" style={{
              padding: "1.2rem 3rem",
              backgroundColor: "transparent",
              color: "#F8EEDF",
              border: "2px solid #F8EEDF",
              borderRadius: "50px",
              fontSize: "1.1rem",
              fontWeight: "700",
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}>Request Info</button>
          </div>
          
          <p style={{
            marginTop: "2rem",
            fontSize: "1rem",
            opacity: 0.7,
          }}>Have questions? <Link to="/contact" style={{ color: "#E8C999", textDecoration: "underline" }}>Contact us</Link> for a custom package</p>
        </div>
      </section>
    </div>
  );
};

export default Service;