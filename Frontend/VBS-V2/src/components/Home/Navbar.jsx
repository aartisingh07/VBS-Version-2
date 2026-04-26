import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "../../styles/Home/Navbar.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme toggle
  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";
  }, [darkMode]);

  return (
    <nav className={`navbar ${scrolled ? "navbar-shadow" : ""}`}>
      {/* Logo */}
      <div className="logo">
        🏦 <span>VBS Bank</span>
      </div>

      {/* Desktop Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/rates">FD Rates</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      {/* Right Section */}
      <div className="nav-actions">
        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button className="login-btn"><NavLink to="/login">Login</NavLink></button>
        <button className="open-btn"><NavLink to="/open-account">Open Account</NavLink></button>

        {/* Mobile Menu */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>
    </nav>
  );
}

export default Navbar;