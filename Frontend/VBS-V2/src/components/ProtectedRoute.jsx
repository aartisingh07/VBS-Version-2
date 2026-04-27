import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const customerId =
    localStorage.getItem("customerId");

  if (!customerId) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;