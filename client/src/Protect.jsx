import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function Protect({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && token !== "undefined" && token !== "null") {
      setIsAuthenticated(true);   // ✅ logged in
    } else {
      setIsAuthenticated(false);  // ❌ not logged in
    }
  }, []);

  if (isAuthenticated === null) {
    return null; // or a spinner if you want
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
