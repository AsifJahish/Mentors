import React from "react";
import "./Mentor.css";
import yusuf from "../assets/yusuf.JPG";

import aziz from "../assets/aziz.JPG";
import pedram from "../assets/pedram.JPG";
import murtaza from "../assets/murtaza.JPG";

import Mohammad from "../assets/mohammad.JPG";
import abas from "../assets/abas.jpg";
import basir from "../assets/abas.jpg";


const mentors = [
  { name: "Sayed Yusuf Masood", role: "Mentorship Coordinator", image: yusuf },
  { name: "Mansor Alizada", role: "Scholarship Advisor", image: aziz },
  { name: "Pedram Sadiqi", role: "Career Development Specialist", image: pedram },
  { name: "Mohammad Danish", role: "Educational Consultant", image: murtaza },
  { name: "Jawed Khadimi", role: "Resource Manager", image: Mohammad },
  { name: "Jalil Jawed", role: "Student Advisor", image: basir},
  { name: "Kalil Nikzad", role: "IT expert", image: abas },

];

export default function MentorSection() {
  return (
    <section className="mentor-section">
      <div className="container_mane">
        <h2 className="title_m">Empower Your Education</h2>
        <p className="description_m">
          Unlock your academic potential with personalized mentorship tailored for Afghan students. Our knowledgeable team offers guidance on university selection, scholarships, and career strategies.
        </p>
        <div className="mentor-grid">
          {mentors.map((mentor, index) => (
            <div key={index} className="mentor-card">
              <img className="mentor_pic" src={mentor.image} alt={mentor.name} />
              <h3 className="mentor-name">{mentor.name}</h3>
              <p className="mentor-role">{mentor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}