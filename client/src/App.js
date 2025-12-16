import { BrowserRouter as Router, Routes, Route, Navigate, NavLink } from "react-router-dom";
import SignUpform from "./SignUpform";
import AddEntry from "./AddEntry";
import ViewEntries from "./viewEntries";
import Protect from "./Protect";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Home
        </NavLink>
        <NavLink to="/addEntry" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          AddEntry
        </NavLink>
        <NavLink to="/viewEntries" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          View Entries
        </NavLink>
      </nav>
      
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<SignUpform />} />
        
        {/* Protected pages */}
        <Route 
          path="/addEntry" 
          element={
            <Protect>
              <AddEntry />
            </Protect>
          } 
        />
        
        <Route 
          path="/viewEntries" 
          element={
          <ViewEntries />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;