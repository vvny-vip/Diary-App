import React,{useState}from "react";
import { BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import SignUpform from "./SignUpform";
import AddEntry from "./AddEntry";
import ProtectedRoute from "./Protect";
import "./Style.css"

export default function App() {
  const [check,setCheck] = useState(false);
  return (
    <Router>
      <nav className="navbar">
        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Home
        </NavLink>
        <NavLink to="/AddEntry" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          AddEntry
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<SignUpform setCheck={setCheck}/>} />
        <Route path="/AddEntry" element={<ProtectedRoute check={check}>
              <AddEntry setCheck={setCheck} />
            </ProtectedRoute>} />
      </Routes>
    </Router>
  );
}
