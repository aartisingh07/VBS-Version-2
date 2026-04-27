import React from "react";
import "../../styles/User Dashboard/Transactions.css";

const transactions = [
  {
    title: "Amazon Payment",
    type: "Debit",
    amount: "₹2,499",
    date: "24 Apr 2026",
    status: "Completed"
  },
  {
    title: "Salary Credit",
    type: "Credit",
    amount: "₹35,000",
    date: "22 Apr 2026",
    status: "Completed"
  },
  {
    title: "Transfer to Rahul",
    type: "Debit",
    amount: "₹5,000",
    date: "21 Apr 2026",
    status: "Completed"
  },
  {
    title: "Electricity Bill",
    type: "Debit",
    amount: "₹1,850",
    date: "18 Apr 2026",
    status: "Pending"
  },
  {
    title: "Refund from Myntra",
    type: "Credit",
    amount: "₹1,299",
    date: "16 Apr 2026",
    status: "Completed"
  }
];

function Transactions() {

  const downloadStatement = () => {
    alert("Statement downloaded successfully 📄");
  };

  return (
    <div className="transactions-page">

      <div className="transactions-header">
        <div>
          <h1>Transactions History 📜</h1>
          <p>Track all your credits, debits and transfers.</p>
        </div>

        <button
          className="statement-btn"
          onClick={downloadStatement}
        >
          📄 Download Statement
        </button>
      </div>

      {/* SUMMARY CARDS */}
      <div className="summary-grid">

        <div className="summary-card">
          <h4>Total Balance</h4>
          <h2>₹ 82,650</h2>
        </div>

        <div className="summary-card">
          <h4>Money Sent</h4>
          <h2>₹ 9,349</h2>
        </div>

        <div className="summary-card">
          <h4>Money Received</h4>
          <h2>₹ 36,299</h2>
        </div>

        <div className="summary-card">
          <h4>This Month Spend</h4>
          <h2>₹ 14,650</h2>
        </div>

      </div>

      {/* SEARCH BAR */}
      <div className="search-filter">

        <input
          type="text"
          placeholder="Search transaction..."
        />

        <select>
          <option>All Types</option>
          <option>Credit</option>
          <option>Debit</option>
        </select>

      </div>

      {/* TABLE */}
      <div className="table-box">

        <div className="table-head">
          <span>Name</span>
          <span>Type</span>
          <span>Amount</span>
          <span>Date</span>
          <span>Status</span>
        </div>

        {transactions.map((item, index) => (
          <div className="table-row" key={index}>

            <span>{item.title}</span>

            <span
              className={
                item.type === "Credit"
                  ? "credit"
                  : "debit"
              }
            >
              {item.type}
            </span>

            <span>{item.amount}</span>
            <span>{item.date}</span>

            <span
              className={
                item.status === "Completed"
                  ? "done"
                  : "pending"
              }
            >
              {item.status}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Transactions;