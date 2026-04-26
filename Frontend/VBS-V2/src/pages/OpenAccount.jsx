import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import "../styles/OpenAccount.css";

function OpenAccount() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    aadhaar: "",
    password: "",
    confirmPassword: "",
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/register",
        formData
      );

      localStorage.setItem(
        "customerId",
        res.data.customerId
      );

      navigate("/dashboard");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="open-account-page">
      <div className="open-left">
        <span className="open-badge">VBS BANK</span>
        <h1>Open Your Smart Bank Account Today</h1>
        <p>
          Secure digital banking with instant onboarding, fast transfers,
          smart debit card access and 24/7 banking support.
        </p>

        <div className="open-features">
          <span>✔ Instant Account Opening</span>
          <span>✔ Zero Hidden Charges</span>
          <span>✔ Secure Banking</span>
        </div>
      </div>

      <div className="open-right">
        <form className="open-form" onSubmit={handleSubmit}>
          <h2>Create Bank Account</h2>

          <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
          <input type="text" name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
          <textarea name="address" placeholder="Residential Address" onChange={handleChange} required></textarea>
          <input type="text" name="aadhaar" placeholder="Aadhaar Number" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />

          <label className="terms">
            <input type="checkbox" name="terms" onChange={handleChange} />
            I agree to terms & conditions
          </label>

          <button type="submit">Open Account</button>

          <p className="login-link">
            Already have an account? <span><NavLink to="/login">Login</NavLink></span>
          </p>
        </form>
      </div>
    </section>
  );
}

export default OpenAccount;