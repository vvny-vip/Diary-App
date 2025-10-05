import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import SignUpform from "./SignUpform";

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is a simple diary app built with React Router.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Feel free to reach out anytime!</p>
    </div>
  );
}

export default function App() {
  const activeStyle = {
    fontWeight: "bold",
    color: "green",
    textDecoration: "none",
    borderBottom: "2px solid green", // optional, shows underline for active tab
    paddingBottom: "2px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
  };

  return (
    <Router>
      <nav style={{ marginBottom: "20px", display: "flex", gap: "20px" }}>
        <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : linkStyle)}>
          Home
        </NavLink>

        <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : linkStyle)}>
          About
        </NavLink>

        <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : linkStyle)}>
          Contact
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<SignUpform />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
