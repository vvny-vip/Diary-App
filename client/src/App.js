import React,{useState}from "react";
import { BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import SignUpform from "./SignUpform";
import AddEntry from "./AddEntry";
import ViewEntries from "./viewEntries";
import Protect from "./Protect";
import "./Style.css"


export default function App() {
  return (
    <Router>
      <nav className="navbar">
        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Home
        </NavLink>
        <NavLink to="/AddEntry" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          AddEntry
        </NavLink>
        <NavLink to="/viewEntries" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          View Entries
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<SignUpform />} />
        <Route path="/AddEntry" element={<Protect>
              <AddEntry/>
            </Protect>} />
        <Route path="/viewEntries" element={
              <ViewEntries/>}/>
      </Routes>
    </Router>
  );
}
