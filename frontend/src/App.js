import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import SignUpform from "./SignUpform";
import "./Style.css"

export default function App() {
  const activeStyle = {
    fontWeight: "bold",
    color: "white",
    textDecoration: "none",
    backgroundColor:"#3498db",
     borderRadius :"8px",
    padding : "8px 8px"
    
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
     padding: "8px 8px"
  };

  return (
    <Router>
      <nav className="navbar">
        <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : linkStyle)}>
          Home
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<SignUpform />} />
        
      </Routes>
    </Router>
  );
}
