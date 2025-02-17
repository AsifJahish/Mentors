import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="navbar"> 
      {/* Main container to align everything inside navbar */}
      <div className="navbar-content">
        <Link to="/" className="logo">
          Afghan Mentors
        </Link>

        <nav className="nav-links">
          <Link to="" className="nav-item">About Us</Link>

          <div className="dropdown">
            <button className="nav-item dropdown-toggle">
              Programs
            </button>
            <div className="dropdown-menu">
              <Link to="" className="dropdown-item">Mentorship</Link>
              <Link to="" className="dropdown-item">Training</Link>
            </div>
          </div>

          <Link to="" className="nav-item">Careers</Link>
          <Link to="" className="nav-item">Blog</Link>
        </nav>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQ1BGXK7gzE5Uvgzkfbsod-OXQgca59HuiS6HfoGWEhhl3lQ/viewform?usp=sharing" target="_blank" rel="noopener noreferrer">
  <button className="contact-button">Apply</button>
</a>


        {/* Mobile Toggle Button */}
        <div className="toggle-container">
          <button className="toggle-button" onClick={() => setDropdownOpen(!dropdownOpen)}>
            ☰
          </button>
          {dropdownOpen && (
            <div className="toggle-menu">
              <Link to="/services" className="toggle-item">Services</Link>
              <Link to="/resources" className="toggle-item">Resources</Link>
              <Link to="/support" className="toggle-item">Support</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
