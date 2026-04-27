import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import "../../styles/User Dashboard/UserDashboard.css";

function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [user, setUser] = useState({
    fullName: "",
    customerId: ""
  });

  useEffect(() => {
    const customerId = localStorage.getItem("customerId");

    if (customerId) {
      fetchUser(customerId);
    }
  }, []);

  const fetchUser = async (customerId) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/users/${customerId}`
      );

      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* MOBILE HEADER */}
      <div className="mobile-header">
        <button
          className="hamburger"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>

        <button className="mobile-logout-btn">
          Logout
        </button>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* SIDEBAR */}
      <aside className={`sidebar ${menuOpen ? "show-sidebar" : ""}`}>

        <button
          className="close-menu"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <div className="sidebar-logo">
          🏦 <span>VBS Bank</span>
        </div>

        <ul className="sidebar-menu">
          <li><NavLink to="/dashboard">🏠 Dashboard</NavLink></li>
          <li><NavLink to="/transfer">💸 Transfer Money</NavLink></li>
          <li><NavLink to="/transactions">📜 Transactions</NavLink></li>
          <li><NavLink to="/cards">💳 Cards</NavLink></li>
          <li><NavLink to="/investments">📈 Investments</NavLink></li>
          <li><NavLink to="/loans">🏦 Loans</NavLink></li>
          <li><NavLink to="/settings">⚙ Settings</NavLink></li>
        </ul>

        <div className="profile-box">
          <div className="profile-icon">👤</div>

          <div>
            <h4>{user.fullName}</h4>
            <p>{user.customerId}</p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;