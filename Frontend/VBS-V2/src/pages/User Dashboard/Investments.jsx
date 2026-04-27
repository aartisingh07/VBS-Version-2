import React from "react";
import "../../styles/User Dashboard/Investments.css";

function Investments() {
  const plans = [
    {
      title: "💰 Fixed Deposit (FD)",
      rate: "7.25% p.a.",
      desc: "Guaranteed returns with safe long-term growth.",
      button: "Open FD"
    },
    {
      title: "📅 Recurring Deposit (RD)",
      rate: "6.90% p.a.",
      desc: "Invest monthly and build disciplined savings.",
      button: "Start RD"
    },
    {
      title: "📈 Mutual Funds",
      rate: "Market Linked",
      desc: "Grow wealth through diversified investments.",
      button: "Explore Funds"
    },
    {
      title: "🪙 Gold Savings",
      rate: "Flexible",
      desc: "Invest digitally in gold anytime, anywhere.",
      button: "Buy Gold"
    }
  ];

  return (
    <div className="investments-page">

      {/* HEADER */}
      <div className="investments-header">
        <h1>Investments & Wealth 📈</h1>
        <p>
          Grow your money with trusted VBS investment plans.
        </p>
      </div>

      {/* SUMMARY */}
      <div className="wealth-grid">

        <div className="wealth-card">
          <h4>Total Invested</h4>
          <h2>₹ 1,25,000</h2>
        </div>

        <div className="wealth-card">
          <h4>Estimated Returns</h4>
          <h2>₹ 14,850</h2>
        </div>

        <div className="wealth-card">
          <h4>Active Plans</h4>
          <h2>03</h2>
        </div>

      </div>

      {/* PRODUCTS */}
      <div className="plans-grid">

        {plans.map((item, index) => (
          <div className="plan-card" key={index}>

            <h3>{item.title}</h3>
            <h4>{item.rate}</h4>
            <p>{item.desc}</p>

            <button>{item.button}</button>

          </div>
        ))}

      </div>

      {/* SIP BOX */}
      <div className="sip-box">

        <h2>🚀 Start Monthly SIP</h2>
        <p>
          Invest as low as ₹500/month and build wealth steadily.
        </p>

        <div className="sip-actions">
          <input
            type="text"
            placeholder="Enter Monthly Amount"
          />

          <button>Start SIP</button>
        </div>

      </div>

      {/* LEARN BOX */}
      <div className="learn-box">

        <h2>📚 Why Invest with VBS?</h2>

        <ul>
          <li>✔ Safe and trusted banking platform</li>
          <li>✔ Competitive FD & RD interest rates</li>
          <li>✔ Easy monthly SIP options</li>
          <li>✔ Wealth tracking dashboard</li>
          <li>✔ Beginner friendly investment tools</li>
        </ul>

      </div>

    </div>
  );
}

export default Investments;