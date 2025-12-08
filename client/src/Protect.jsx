import React from "react";
import { Navigate } from "react-router-dom";

export default function Protect({ children }) {
  const token = localStorage.getItem("token");

  if (!token || token === "undefined" || token.trim() === "") {
    return <Navigate to="/" replace />;
  }

  return children;
}

