import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Info.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Afghan Mentors Section */}
        <div className="footer-section">
          <h2 className="footer-title">Afghan Mentors</h2>
          <p className="footer-text">
            Afghan Student Guide is a dedicated platform that provides
            personalized educational advice and guidance for Afghan students of
            all levels. Our expert team offers mentorship, university and
            scholarship counseling, study resources, and career support to help
            students achieve their academic and professional goals.
          </p>
        </div>

        {/* Our Services Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Our Services</h3>
          <ul className="footer-list">
            <li>Mentorship</li>
            <li>Scholarship Guidance</li>
            <li>Study Resources</li>
            <li>Career Support</li>
          </ul>
        </div>

        {/* About Section with Router Links */}
        <div className="footer-section">
          <h3 className="footer-heading">About</h3>
          <ul className="footer-list">
            <li><Link to="/about" className="footer-link">What We Stand For</Link></li>
            <li><Link to="/vision" className="footer-link">Our Vision</Link></li>
            <li><Link to="/team" className="footer-link">Our Team</Link></li>
            <li><Link to="/contact" className="footer-link">Get in Touch</Link></li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Information</h3>
          <ul className="footer-list">
            <li>123 Afghan Mentors Ave, Suite 456, Student City, AQ 12345</li>
            <li>📞 +1 (888) 123-4567</li>
            <li>✉️ info@afghanmentors.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
