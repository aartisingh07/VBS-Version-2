import React, { useState } from "react";
import { NavLink , useNavigate } from "react-router-dom";

import "../styles/Login.css";

function Login() {
  const [formData, setFormData] = useState({
    customerId: "",
    fullName: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    localStorage.setItem(
      "customerId",
      formData.customerId
    );

    navigate("/dashboard");
  };

  const navigate = useNavigate();
  
  return (
    <section className="login-page">
      {/* LEFT SIDE */}
      <div className="login-left">
        <span className="login-badge">WELCOME BACK</span>

        <h1>
          Secure Access To <span>Your Account</span>
        </h1>

        <p>
          Login using your Customer ID and password to access dashboard,
          transactions, debit card services and smart banking tools.
        </p>

        <div className="login-features">
          <span>✔ Fast Login</span>
          <span>✔ Bank-Level Security</span>
          <span>✔ 24/7 Banking Access</span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>

          <input
            type="text"
            name="customerId"
            placeholder="Customer ID"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>

          <p className="signup-link">
            New user? <span><NavLink to="/open-account">Open Account</NavLink></span>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;