import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./header/Navbar"; // Navbar
import Home from "./home/Home"; // Import Home component
import './App.css';

function App() {

  return (
  <Router>
      <Navbar />
      <div style={{ paddingTop: "40px" }}> {/* Reduce padding here */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
