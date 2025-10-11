import React from "react";
import { Navigate } from "react-router-dom";

export default function Protect({ check, children }) {
  if (!check) {
    return <Navigate to="/" replace />;
  }
  return children;
}

