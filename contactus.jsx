import React, { useState, useEffect, useRef } from "react";

const contactInfo = [
  {
    image: "/loc.png",
    title: "Address",
    detail: "123 Sakura Street, Shibuya-ku",
    subdetail: "Tokyo 150-0002, Japan"
  },
  {
    image: "/phone.png",
    title: "Phone",
    detail: "+63 1234 5678 90",
    subdetail: "Mon-Fri: 9AM - 6PM JST"
  },
  {
    image: "/email.png",
    title: "Email",
    detail: "Japanese@japan.com",
    subdetail: "We reply within 24 hours"
  }
];

const socialMedia = [
  { image: "/fb.png", name: "Facebook", handle: "@JapanOfficial", color: "#1877F2" },
  { image: "/insta.png", name: "Instagram", handle: "@japan", color: "#E4405F" },
  { image: "/twitter.png", name: "Twitter", handle: "@japan", color: "#1DA1F2" },
  { image: "/link.png", name: "LinkedIn", handle: "JAPAN", color: "#0A66C2" }
];

const locations = [
  {
    name: "Tokyo Office",
    address: "Shibuya Crossing, Tokyo",
    hours: "Mon-Fri: 9AM - 6PM",
    image: "/loc.png"
  },
  {
    name: "Kyoto Branch",
    address: "Gion District, Kyoto",
    hours: "Mon-Sat: 10AM - 7PM",
    image: "/loc.png"
  },
  {
    name: "Osaka Center",
    address: "Dotonbori, Osaka",
    hours: "Mon-Fri: 9AM - 5PM",
    image: "/loc.png"
  },
  {
    name: "Hokkaido Hub",
    address: "Sapporo City, Hokkaido",
    hours: "Tue-Sat: 10AM - 6PM",
    image: "/loc.png"
  }
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [focusedInput, setFocusedInput] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const contactRef = useRef();
  const formRef = useRef();
  const locationRef = useRef();
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

    [contactRef, formRef, locationRef, ctaRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all fields");
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert("Thank you for contacting us! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

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
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .contact-card {
          transition: all 0.3s ease;
        }
        
        .contact-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(142,22,22,0.2);
        }
        
        .social-card {
          transition: all 0.3s ease;
        }
        
        .social-card:hover {
          transform: scale(1.08);
        }
        
        .location-card {
          transition: all 0.4s ease;
        }
        
        .location-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(142,22,22,0.25);
        }
        
        .input-field {
          transition: all 0.3s ease;
        }
        
        .input-field:focus {
          outline: none;
          border-color: #8E1616 !important;
          box-shadow: 0 0 0 3px rgba(142,22,22,0.1);
          transform: scale(1.02);
        }
        
        .submit-button {
          transition: all 0.4s ease;
        }
        
        .submit-button:hover:not(:disabled) {
          background-color: #000 !important;
          transform: scale(1.05);
        }
        
        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
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
        
        @media (max-width: 968px) {
          .hero-title { font-size: 3.5rem !important; }
          .section-title { font-size: 2rem !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
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
        background: "linear-gradient(rgba(0,0,0,0.5), rgba(142,22,22,0.4)), url('/contat.gif') center/cover fixed",
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
          }}>Contact Us</h1>
          
          <p style={{
            fontSize: "1.8rem",
            marginBottom: "1.5rem",
            color: "#E8C999",
            fontWeight: "300",
            animation: "fadeInUp 1s ease-out 0.3s forwards",
            opacity: 0,
          }}>お問い合わせ</p>
          
          <p style={{
            fontSize: "1.3rem",
            color: "#F8EEDF",
            maxWidth: "800px",
            margin: "0 auto 2rem",
            lineHeight: "1.8",
            animation: "fadeInUp 1s ease-out 0.6s forwards",
            opacity: 0,
          }}>
            We'd love to hear from you! Get in touch with our team
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
            Whether you have questions about our services, need assistance planning your journey, or want to explore partnership opportunities—we're here to help.
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

      {/* Contact Information Section */}
      <section ref={contactRef} style={{ padding: "6rem 2rem", backgroundColor: "#F8EEDF" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2 className="section-title" style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "#8E1616",
            textAlign: "center",
            marginBottom: "0.5rem",
          }}>Get In Touch</h2>
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
          }}>Reach out through any of these channels</p>
          
          {/* Contact Cards */}
          <div className="contact-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.5rem",
            marginBottom: "4rem",
          }}>
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="contact-card"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  padding: "2.5rem",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  border: "3px solid #E8C999",
                }}
              >
                <div style={{
                  fontSize: "4rem",
                  marginBottom: "1rem",
                }}><img src={info.image} alt={info.title} style={{ width: "80px", height: "60px", objectFit: "cover", borderRadius: "10px" }} /></div>
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#8E1616",
                  marginBottom: "1rem",
                }}>{info.title}</h3>
                <p style={{
                  fontSize: "1.1rem",
                  color: "#000",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                }}>{info.detail}</p>
                <p style={{
                  fontSize: "0.95rem",
                  color: "#000",
                  opacity: 0.7,
                }}>{info.subdetail}</p>
              </div>
            ))}
          </div>

          {/* Social Media */}
          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <h3 style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "#8E1616",
              marginBottom: "2rem",
            }}>Follow Us</h3>
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}>
              {socialMedia.map((social, idx) => (
                <div
                  key={idx}
                  className="social-card"
                  style={{
                    backgroundColor: hoveredSocial === idx ? social.color : "#fff",
                    color: hoveredSocial === idx ? "#fff" : "#000",
                    padding: "1.5rem 2rem",
                    borderRadius: "15px",
                    cursor: "pointer",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                    border: `2px solid ${social.color}`,
                    minWidth: "200px",
                  }}
                  onMouseEnter={() => setHoveredSocial(idx)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}><img src={social.image} alt={social.name} style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "50%" }} /></div>
                  <div style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.3rem" }}>{social.name}</div>
                  <div style={{ fontSize: "0.9rem", opacity: 0.9 }}>{social.handle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} style={{
        padding: "6rem 2rem",
        background: "linear-gradient(135deg, #000000 0%, #1a0000 100%)",
        color: "#F8EEDF",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "#E8C999",
            textAlign: "center",
            marginBottom: "0.5rem",
          }}>Send Us a Message</h2>
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
          }}>Fill out the form below and we'll respond within 24 hours</p>
          
          <div style={{
            backgroundColor: "#F8EEDF",
            borderRadius: "20px",
            padding: "3rem",
            boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
          }}>
            <div className="form-row" style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2rem",
              marginBottom: "2rem",
            }}>
              <div>
                <label style={{
                  display: "block",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "#8E1616",
                  marginBottom: "0.5rem",
                }}>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedInput('name')}
                  onBlur={() => setFocusedInput(null)}
                  className="input-field"
                  style={{
                    width: "95%",
                    padding: "1rem",
                    fontSize: "1rem",
                    border: `2px solid ${focusedInput === 'name' ? '#8E1616' : '#E8C999'}`,
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                  }}
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label style={{
                  display: "block",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "#8E1616",
                  marginBottom: "0.5rem",
                }}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedInput('email')}
                  onBlur={() => setFocusedInput(null)}
                  className="input-field"
                  style={{
                    width: "95%",
                    padding: "1rem",
                    fontSize: "1rem",
                    border: `2px solid ${focusedInput === 'email' ? '#8E1616' : '#E8C999'}`,
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                  }}
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div style={{ marginBottom: "2rem" }}>
              <label style={{
                display: "block",
                fontSize: "1.1rem",
                fontWeight: "600",
                color: "#8E1616",
                marginBottom: "0.5rem",
              }}>Subject *</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                onFocus={() => setFocusedInput('subject')}
                onBlur={() => setFocusedInput(null)}
                className="input-field"
                style={{
                  width: "98%",
                  padding: "1rem",
                  fontSize: "1rem",
                  border: `2px solid ${focusedInput === 'subject' ? '#8E1616' : '#E8C999'}`,
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                }}
                placeholder="What is this regarding?"
              />
            </div>
            
            <div style={{ marginBottom: "2rem" }}>
              <label style={{
                display: "block",
                fontSize: "1.1rem",
                fontWeight: "600",
                color: "#8E1616",
                marginBottom: "0.5rem",
              }}>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => setFocusedInput('message')}
                onBlur={() => setFocusedInput(null)}
                rows="6"
                className="input-field"
                style={{
                  width: "98%",
                  padding: "1rem",
                  fontSize: "1rem",
                  border: `2px solid ${focusedInput === 'message' ? '#8E1616' : '#E8C999'}`,
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  fontFamily: "inherit",
                  resize: "vertical",
                }}
                placeholder="Tell us more about your inquiry..."
              />
            </div>
            
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="submit-button"
              style={{
                width: "100%",
                padding: "1.2rem",
                fontSize: "1.1rem",
                fontWeight: "700",
                backgroundColor: "#8E1616",
                color: "#F8EEDF",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section ref={locationRef} style={{ padding: "6rem 2rem", backgroundColor: "#F8EEDF" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "#8E1616",
            textAlign: "center",
            marginBottom: "0.5rem",
          }}>Our Locations</h2>
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
          }}>Visit us at any of our offices across Japan</p>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2.5rem",
          }}>
            {locations.map((location, idx) => (
              <div
                key={idx}
                className="location-card"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  padding: "2.5rem",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  border: "3px solid #E8C999",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={() => setHoveredLocation(idx)}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                <div style={{
                  fontSize: "4.5rem",
                  marginBottom: "1rem",
                  transform: hoveredLocation === idx ? "scale(1.2) rotate(10deg)" : "scale(1)",
                  transition: "transform 0.3s ease",
                }}><img src={location.image} alt={location.name} style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "10px" }} /></div>
                
                <h3 style={{
                  fontSize: "1.6rem",
                  fontWeight: "700",
                  color: "#8E1616",
                  marginBottom: "1rem",
                }}>{location.name}</h3>
                
                <p style={{
                  fontSize: "1.05rem",
                  color: "#000",
                  marginBottom: "0.8rem",
                  lineHeight: "1.6",
                }}>{location.address}</p>
                
                <div style={{
                  display: "inline-block",
                  backgroundColor: "#E8C999",
                  color: "#000",
                  padding: "0.5rem 1.2rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                }}>{location.hours}</div>
                
                {hoveredLocation === idx && (
                  <div style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    backgroundColor: "#8E1616",
                    color: "#F8EEDF",
                    padding: "1rem",
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    animation: "fadeInUp 0.3s ease forwards",
                  }}>
                    📍 View on Map
                  </div>
                )}
              </div>
            ))}
          </div>
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
          }}>Let's Connect</h2>
          
          <p style={{
            fontSize: "1.3rem",
            marginBottom: "3rem",
            lineHeight: "1.8",
            opacity: 0.9,
          }}>
            Have questions or ready to start your Japanese adventure? We're just a message away. Our team is dedicated to providing you with the best experience possible.
          </p>
          
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
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Contact Us Now
          </button>
          
          <p style={{
            marginTop: "2rem",
            fontSize: "1rem",
            opacity: 0.7,
          }}>Or call us at <span style={{ color: "#E8C999", fontWeight: "600" }}>+63 1234 5678 90</span></p>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;