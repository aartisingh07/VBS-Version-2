import React from "react";
import "../../styles/Home/FdRates.css";

function FdRates() {
  const ratesData = [
    {
      tenure: "7 - 30 Days",
      regular: "3.25%",
      senior: "3.75%"
    },
    {
      tenure: "31 - 90 Days",
      regular: "4.10%",
      senior: "4.60%"
    },
    {
      tenure: "91 - 180 Days",
      regular: "5.20%",
      senior: "5.70%"
    },
    {
      tenure: "181 - 364 Days",
      regular: "6.10%",
      senior: "6.60%"
    },
    {
      tenure: "1 Year",
      regular: "6.75%",
      senior: "7.25%"
    },
    {
      tenure: "15 Months",
      regular: "6.95%",
      senior: "7.45%"
    },
    {
      tenure: "18 Months",
      regular: "7.10%",
      senior: "7.60%"
    },
    {
      tenure: "2 Years",
      regular: "7.25%",
      senior: "7.75%"
    },
    {
      tenure: "3 Years",
      regular: "7.40%",
      senior: "7.90%"
    },
    {
      tenure: "5 Years",
      regular: "7.15%",
      senior: "7.65%"
    }
  ];

  return (
    <section className="rates-page">
      <div className="rates-container">
        <span className="rates-badge">VBS BANK</span>

        <h1>Fixed Deposit Interest Rates</h1>

        <p>
          Attractive fixed deposit returns for regular and senior citizens.
          Rates are subject to change periodically.
        </p>

        <div className="table-wrapper">
          <table className="rates-table">
            <thead>
              <tr>
                <th>Maturity Period</th>
                <th>Regular Citizen</th>
                <th>Senior Citizen</th>
              </tr>
            </thead>

            <tbody>
              {ratesData.map((item, index) => (
                <tr key={index}>
                  <td>{item.tenure}</td>
                  <td>{item.regular}</td>
                  <td>{item.senior}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rates-note">
          * Senior citizens receive additional benefits on eligible plans.
        </div>
      </div>
    </section>
  );
}

export default FdRates;