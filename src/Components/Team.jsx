import React from "react";
import "../Styles/Team.css";
import Card from "./Card";
import profile1 from "../Assets/profile-1.jpg";
import profile2 from "../Assets/profile-2.jpg";
import profile3 from "../Assets/profile-3.jpg";
import profile4 from "../Assets/profile-4.jpg";
{/*import profile6 from "../Assets/profile6.jpeg";
import profile7 from "../Assets/profile 7.jpg";
import profile8 from "../Assets/profile 8.jpg";
import profile9 from "../Assets/profile9.jpg";*/}


function Team() {
  return (
    <div className="team" id="team">
      <div className="title-content">
        <h3 className="title">
          <span>Meet Our Team</span>
        </h3>

        <p className="description">
        Our team is a diverse and talented group of individuals who are passionate about creating a seamless and user-friendly experience for our users. Led by experienced developers, designers, 
        and managers, we work collaboratively to ensure that the Hall Ticket Generator website meets the needs and expectations of our users.
        </p>
      </div>

      <div className="cards-content">
        <Card
          img={profile1}
          name="Emily Johnson"
          title="Lead Developer"
        />
        <Card
          img={profile2}
          name="David Garcia"
          title="Graphic Designer"
        />
        <Card
          img={profile3}
          name="Sarah Thompson"
          title="QA Specialist "
        />
        <Card
          img={profile4}
          name="Michael Chen"
          title="Customer Support Manager"
        />
       {/*  <DoctorCard
          img={profile6}
          name="Michael Chen"
          title="Customer Support Manager"
        />
         <DoctorCard
          img={profile7}
          name="Michael Chen"
          title="Customer Support Manager"
        />
        <DoctorCard
          img={profile8}
          name="Michael Chen"
          title="Customer Support Manager"
        />
        <DoctorCard
          img={profile9}
          name="Michael Chen"
          title="Customer Support Manager"
  />*/}
      </div>
    </div>
  );
}

export default Team;
