import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Login from "../Components/Login";
import About from "../Components/About";

import Reviews from "../Components/Reviews";
import Doctors from "../Components/Team";
import Footer from "../Components/Footer";


function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Login />
     
    
      <Doctors />
      
      <About />
      <Reviews />
      <Footer />
 
    </div>
  );
}

export default Home;
