import React from "react";
import "../styles/ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <p>협업이나 프로젝트 관련 문의는 언제든지 연락해 주세요. 함께 새로운 가능성을 만들어가고 싶습니다.</p>
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows="5" required></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="social-links">
        <a href="https://github.com/n3wzd" target="_blank" rel="noopener noreferrer">
          <div className="icon-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.729.084-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.304-.535-1.527.117-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.983-.399 3.005-.404 1.021.005 2.048.138 3.006.404 2.293-1.552 3.296-1.23 3.296-1.23.653 1.649.241 2.872.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.804 5.623-5.475 5.92.43.371.814 1.102.814 2.222 0 1.604-.015 2.896-.015 3.286 0 .321.217.694.825.576 4.765-1.585 8.199-6.082 8.199-11.384 0-6.627-5.373-12-12-12z"/>
              </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
