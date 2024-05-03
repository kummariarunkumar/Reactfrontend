import React, { useEffect, useState } from "react";
import Picture from "../Assets/picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRegistrationClick = () => {
    navigate("/Enroll");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">Simplifying Ticket Management Effortlessly</p>
          <h2 className="text-title">
          Streamline Your Hall Ticket Process with Ease
          </h2>
          <p className="text-descritpion">
            Welcome to our Hall Ticket Generating System,
            designed to streamline the process of creating and distributing hall tickets for various examinations and events. 
            Our platform offers a user-friendly interface that simplifies the entire process.
            our system is tailored to meet your specific needs efficiently and effectively.
          </p>
          <button
            className="text-register-btn"
            type="button"
            onClick={handleRegistrationClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Registration 
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>145k+</p>
              <p>Employees</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>Services</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Picture} alt="Lady" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
