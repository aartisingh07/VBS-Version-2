import React, { useState } from "react";

import "../../styles/User Dashboard/Loans.css";

function Loans() {
  const [showBranches, setShowBranches] = useState(false);

  const branches = [
    {
      name: "VBS Panvel Branch",
      address: "Sector 15, New Panvel, Navi Mumbai",
      officer: "Priya Sharma",
      phone: "+91 98765 43210"
    },
    {
      name: "VBS Kalamboli Branch",
      address: "Roadpali, Kalamboli, Navi Mumbai",
      officer: "Rahul Mehta",
      phone: "+91 91234 56789"
    },
    {
      name: "VBS Kharghar Branch",
      address: "Central Park Road, Kharghar",
      officer: "Sneha Patil",
      phone: "+91 99887 66554"
    }
  ];

  const loans = [
    {
      title: "🏠 Home Loan",
      rate: "8.25% onwards",
      desc: "Low EMI, long tenure, tax benefits."
    },
    {
      title: "🚗 Car Loan",
      rate: "9.10% onwards",
      desc: "Quick approval with easy paperwork."
    },
    {
      title: "🎓 Education Loan",
      rate: "7.95% onwards",
      desc: "Student friendly repayment options."
    },
    {
      title: "💼 Personal Loan",
      rate: "10.50% onwards",
      desc: "Instant funds without collateral."
    },
    {
      title: "🏢 Business Loan",
      rate: "11.20% onwards",
      desc: "Expand your business with capital support."
    },
    {
      title: "🛵 Two Wheeler Loan",
      rate: "8.90% onwards",
      desc: "Easy documentation and fast sanction."
    }
  ];

  return (
    <div className="loans-page">

      <div className="loans-header">
        <h1>Loans & Financial Services 🏦</h1>
        <p>
          Discover nearby branches and find the right loan for your needs.
        </p>
      </div>

      {/* FIND BRANCH */}
      <div className="locate-box">
        <button
          className="locate-btn"
          onClick={() => setShowBranches(!showBranches)}
        >
          📍 Locate Nearby Branches
        </button>
      </div>

      {/* BRANCH CARDS */}
      {showBranches && (
        <div className="branch-grid">

          {branches.map((item, index) => (
            <div className="branch-card" key={index}>

              <h3>{item.name}</h3>
              <p>{item.address}</p>

              <div className="officer-box">
                <h4>{item.officer}</h4>
                <span>{item.phone}</span>
              </div>

              <button className="visit-btn">
                🚗 Request Visit
              </button>

            </div>
          ))}

        </div>
      )}

      {/* LOAN TYPES */}
      <div className="loan-section">
        <h2>Available Loan Products</h2>

        <div className="loan-grid">

          {loans.map((item, index) => (
            <div className="loan-card" key={index}>

              <h3>{item.title}</h3>
              <h4>{item.rate}</h4>
              <p>{item.desc}</p>

              <button>Know More</button>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default Loans;