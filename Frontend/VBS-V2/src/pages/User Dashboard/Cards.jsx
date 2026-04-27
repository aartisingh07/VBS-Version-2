import React, { useState } from "react";
import "../../styles/User Dashboard/Cards.css";

function Cards() {
  const [isFrozen, setIsFrozen] = useState(false);
  const [onlineOn, setOnlineOn] = useState(true);
  const [atmOn, setAtmOn] = useState(true);
  const [intlOn, setIntlOn] = useState(false);

  const recentTransactions = [
    { name: "Amazon", amount: "₹2,499" },
    { name: "Swiggy", amount: "₹430" },
    { name: "Netflix", amount: "₹649" },
    { name: "ATM Cash", amount: "₹5,000" }
  ];

  return (
    <div className="cards-page">

      {/* HEADER */}
      <div className="cards-header">
        <h1>Cards & Controls 💳</h1>
        <p>Manage your debit card security and settings.</p>
      </div>

      {/* CARD PREVIEW */}
      <div className="debit-card-box">

        <div className={`bank-card ${isFrozen ? "frozen-card" : ""}`}>
          <p className="card-type">VBS Platinum Debit Card</p>

          <h2>**** **** **** 9010</h2>

          <div className="card-bottom">
            <span>Aarti Singh</span>
            <span>12/30</span>
          </div>

          <div className="status-tag">
            {isFrozen ? "Frozen 🔒" : "Active ✅"}
          </div>
        </div>

      </div>

      {/* CONTROLS */}
      <div className="controls-grid">

        <div className="control-card">
          <h3>Freeze Card</h3>
          <button
            onClick={() => setIsFrozen(!isFrozen)}
          >
            {isFrozen ? "Unfreeze Card" : "Freeze Card"}
          </button>
        </div>

        <div className="control-card">
          <h3>Online Payments</h3>
          <button
            onClick={() => setOnlineOn(!onlineOn)}
          >
            {onlineOn ? "ON ✅" : "OFF ❌"}
          </button>
        </div>

        <div className="control-card">
          <h3>ATM Withdrawals</h3>
          <button
            onClick={() => setAtmOn(!atmOn)}
          >
            {atmOn ? "ON ✅" : "OFF ❌"}
          </button>
        </div>

        <div className="control-card">
          <h3>International Usage</h3>
          <button
            onClick={() => setIntlOn(!intlOn)}
          >
            {intlOn ? "ON ✅" : "OFF ❌"}
          </button>
        </div>

      </div>

      {/* EXTRA ACTIONS */}
      <div className="extra-grid">

        <div className="extra-card">
          <h3>🔁 Change PIN</h3>
          <p>Securely reset your ATM PIN anytime.</p>
          <button>Change PIN</button>
        </div>

        <div className="extra-card">
          <h3>🚨 Report Lost Card</h3>
          <p>Immediately block your lost or stolen card.</p>
          <button>Block Now</button>
        </div>

      </div>

      {/* CREDIT CARD OFFER */}
      <div className="offer-card">
        <h2>✨ VBS Rewards Credit Card</h2>
        <p>
          5% Cashback • Airport Lounge Access • EMI Benefits
        </p>
        <button>Apply Now</button>
      </div>

      {/* RECENT USAGE */}
      <div className="usage-box">

        <h2>Recent Card Usage</h2>

        {recentTransactions.map((item, index) => (
          <div className="usage-row" key={index}>
            <span>{item.name}</span>
            <span>{item.amount}</span>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Cards;