import React from "react";
import {
  User,
  Landmark,
  Repeat,
  FileText,
  CalendarDays,
  Wallet,
  Search
} from "lucide-react";

import "../../styles/User Dashboard/TransferMoney.css";

const transferOptions = [
  {
    title: "Send to Friend / Family",
    desc: "Transfer instantly using mobile or customer ID",
    icon: <User size={28} />,
  },
  {
    title: "Bank Transfer",
    desc: "Send money using Account Number & IFSC",
    icon: <Landmark size={28} />,
  },
  {
    title: "Self Transfer",
    desc: "Move funds between your own accounts",
    icon: <Repeat size={28} />,
  },
  {
    title: "Pay Bills",
    desc: "Electricity, Water, Gas, Recharge & more",
    icon: <FileText size={28} />,
  },
  {
    title: "Scheduled Payment",
    desc: "Set a future payment date",
    icon: <CalendarDays size={28} />,
  },
  {
    title: "Wallet Transfer",
    desc: "Send money to supported wallets",
    icon: <Wallet size={28} />,
  },
];

function TransferMoney() {
  return (
    <div className="transfer-page">
      <div className="transfer-header">
        <h1>Transfer Money 💸</h1>
        <p>Choose how you'd like to send money today.</p>
      </div>

      <div className="search-box">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search contact, biller or account..."
        />
      </div>

      <div className="recent-box">
        <h3>Recent Transfers</h3>
        <div className="recent-users">
          <button>Rahul</button>
          <button>Mom</button>
          <button>Electricity</button>
          <button>My Savings</button>
        </div>
      </div>

      <div className="transfer-grid">
        {transferOptions.map((item, index) => (
          <div className="transfer-card" key={index}>
            <div className="card-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <button>Continue</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransferMoney;