import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Enroll from "./Pages/Enroll";


function App() {
  return (
    <div className="App">
      <Router basename="/HallticketGenerator">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/enroll" element={<Enroll/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
