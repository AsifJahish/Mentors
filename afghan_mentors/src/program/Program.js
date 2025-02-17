
// Page.js
import React from "react";
import "./Program.css";

export default function Page() {
  return (
    <main className="container">
      <div className="content">
        <h1 className="title">
          Unlock Your Potential with Tailored Educational Guidance
        </h1>

        <div className="grid-container">
          <div className="card">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/education-3161993-2639259.png"
              alt="Personalized mentorship illustration"
              className="image"
            />
            <h2 className="subtitle">Personalized Mentorship Solutions</h2>
            <p className="description">
              Receive expert mentorship focused on your individual academic journey and future prospects.
            </p>
          </div>

          <div className="card">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/education-3817560-3181523.png"
              alt="Expert guidance illustration"
              className="image"
            />
            <h2 className="subtitle">Expert Guidance for Educational Pathways</h2>
            <p className="description">
              Navigate the complexities of university selection and scholarship applications with confidence.
            </p>
          </div>

          <div className="card">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/scholarship-8875276-7270939.png"
              alt="Build your future illustration"
              className="image"
            />
            <h2 className="subtitle">Build Your Future with Confidence</h2>
            <p className="description">
              Empowering students to foster independence and strategic thinking in their academic and career pursuits.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
