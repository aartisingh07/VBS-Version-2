import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

import "../../styles/User Dashboard/UserDashboard.css";

function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useNavigate();

  const profileRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

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

  const logoutUser = () => {
    localStorage.removeItem("customerId");
    navigate("/login");
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

        <button
          className="mobile-logout-btn"
          onClick={logoutUser}
        >
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

        {/* MENU */}
        <ul className="sidebar-menu">
          <li><NavLink to="/dashboard">🏠 Dashboard</NavLink></li>
          <li><NavLink to="/transfer">💸 Transfer Money</NavLink></li>
          <li><NavLink to="/transactions">📜 Transactions</NavLink></li>
          <li><NavLink to="/cards">💳 Cards</NavLink></li>
          <li><NavLink to="/investments">📈 Investments</NavLink></li>
          <li><NavLink to="/loans">🏦 Loans</NavLink></li>
        </ul>

        {/* PROFILE SECTION */}
        <div className="profile-wrapper" ref={profileRef}>

          {/* POPUP MENU */}
            <div className={`profile-popup ${ profileOpen ? "popup-open" : "popup-close" }`} >
              <button onClick={() => navigate("/profile")}>👤 View Profile</button>
              <button>✏️ Update Profile</button>
              <button>⚙️ Settings</button>
              <button>🔔 Notifications</button>
              <button className="logout" onClick={logoutUser}>🚪 Logout</button>
            </div>

          {/* PROFILE BOX */}
          <div
            className="profile-box"
            onClick={() =>
              setProfileOpen(!profileOpen)
            }
          >

            <div className="profile-icon">👤</div>

            <div>
              <h4>{user.fullName}</h4>
              <p>{user.customerId}</p>
            </div>

          </div>

        </div>

      </aside>
    </>
  );
}

export default Sidebar;