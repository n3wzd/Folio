import React from "react";
import "../styles/ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>협업이나 프로젝트 관련 문의는 언제든지 연락해 주세요. 함께 새로운 가능성을 만들어가고 싶습니다.</p>
      
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
