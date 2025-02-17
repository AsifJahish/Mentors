import React from "react";
import "./Home.css";
import Program from "../program/Program";
import Mentor from "../mentor/Mentor";
import Info from "../info/Info";

export default function HomeSection() {
  return (
    <div className="home">
      {/* Decorative shapes */}


      <div className="container home-content">
        {/* Left Section - Text */}
        <div className="home-text">
          <h1>Empower Your Academic Journey with Afghan Mentors</h1>
          <p>
            Our dedicated team offers personalized educational advice, university application support, and scholarship
            guidance tailored specifically for Afghan students. We help you navigate your academic and professional
            aspirations with confidence.
          </p>
          <button className="primary-btn">Connect with Us</button>
        </div>

        {/* Right Section - Image */}
        <div className="home-image">
          <img 
            src="https://cdni.iconscout.com/illustration/premium/thumb/education-3430845-2871483.png" 
            alt="Education Illustration"
          />
        </div>
      </div>

      {/* Add the other sections below */}
      <Program />
      <Mentor/>
      <Info />
    </div>
  );
}
