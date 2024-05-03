import React from "react";
import side from "../Assets/side.jpg";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
    

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to Hall Ticket Generating System, where convenience meets efficiency in managing and distributing examination hall tickets. 
          we understand the pivotal role that seamless organization plays in the educational process.
          Our platform is designed to alleviate the administrative burdens associates.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Efficiency"
          description="Say goodbye to manual processes and endless paperwork. Our automated system simplifies hall ticket generation, saving valuable time and resources for educational institutions."
        />

        <SolutionStep
          title="Accuracy"
          description="We prioritize accuracy in every aspect of our system. From student data input to hall ticket distribution, our platform ensures that every detail is precise, minimizing errors and discrepancies."
        />

        <SolutionStep
          title="Accessibility"
          description="Our user-friendly interface makes it easy for administrators to navigate the system and for students to access their hall tickets conveniently, anytime and anywhere."
        />
      </div>
      <div className="about-image-content">
        <img src={side} alt="Side" className="about-image1" />
      </div>
    </div>
  );
}

export default About;
