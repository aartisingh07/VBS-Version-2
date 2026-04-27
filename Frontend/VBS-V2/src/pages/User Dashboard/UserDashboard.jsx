import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../styles/User Dashboard/UserDashboard.css";

function UserDashboard() {
  const [user, setUser] = useState({
    fullName: "",
    customerId: "",
    balance: 0
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
      {/* TOPBAR */}
      <div className="topbar">
        <div>
          <h1>
            Welcome to VBS Internet Banking, {user.fullName} 👋
          </h1>

          <p>Customer ID: {user.customerId}</p>
        </div>
      </div>

      {/* CARDS */}
      <div className="dashboard-grid">

        <div className="card balance-card">
          <h3>Available Balance</h3>
          <h2>₹ {user.balance}</h2>
          <p>Click to reveal with password</p>
        </div>

        <div className="card debit-card">
          <h3>Debit Card</h3>
          <p>VBS Platinum Active</p>
          <h2>**** **** **** 9010</h2>
        </div>

        <div className="card quick-card">
          <h3>Quick Actions</h3>
          <br />

          <p><b><u>Send Money</u></b> to your friends and family</p>
          <br />

          <p><b><u>Pay Bills</u></b> - Gas, Water, Electricity and more</p>
          <br />

          <p><b><u>Check History</u></b></p>
          <br />

          <p><b><u>Apply for Loans</u></b> within seconds</p>
        </div>

      </div>

      {/* TRANSACTIONS */}
      <div className="transactions-section">

        <h2>Recent Transactions</h2>

        <div className="transaction-item">
          <span>Amazon Payment</span>
          <span>- ₹2,499</span>
        </div>

        <div className="transaction-item">
          <span>Salary Credit</span>
          <span className="green">+ ₹35,000</span>
        </div>

        <div className="transaction-item">
          <span>Transfer to Rahul</span>
          <span>- ₹5,000</span>
        </div>

      </div>
    </>
  );
}

export default UserDashboard;