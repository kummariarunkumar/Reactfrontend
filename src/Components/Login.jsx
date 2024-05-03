import React from "react";
import LoginSignup from './AdminSignup';
import Adminlogin from './StudentSignup';
import Studentlogin from './TeacherSignup';
import "../Styles/Info.css";


function Info() {
  return (
    <div className="info-section" id="login" >
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Login</span>
        </h3>
       <p className="info-description">
       "Welcome to Our Hall Ticket Generating System: Simplifying Ticket Management Effortlessly"
       </p> 
      <LoginSignup/>
      <Adminlogin/>
      <Studentlogin/>
      </div>
    </div>
  );
}

export default Info;
