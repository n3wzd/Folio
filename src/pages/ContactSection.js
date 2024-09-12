import React from "react";
import "../styles/ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Thank you for visiting my portfolio! If you'd like to get in touch, feel free to send me a message or connect with me on social media.</p>
      
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="social-links">
        <a href="https://github.com/n3wzd" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default ContactSection;
