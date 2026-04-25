import React from "react";
import {
  FaPiggyBank,
  FaExchangeAlt,
  FaLock,
  FaHandHoldingUsd,
  FaCreditCard,
  FaLaptop
} from "react-icons/fa";

import "../../styles/Home/Services.css";

function Services() {
  const servicesData = [
    {
      icon: <FaPiggyBank />,
      title: "Savings Account",
      desc: "Zero balance options with secure banking access."
    },
    {
      icon: <FaExchangeAlt />,
      title: "Money Transfer",
      desc: "Transfer funds instantly anytime, anywhere."
    },
    {
      icon: <FaLock />,
      title: "Fixed Deposit",
      desc: "Grow your savings with attractive returns."
    },
    {
      icon: <FaHandHoldingUsd />,
      title: "Personal Loan",
      desc: "Quick approval loans with easy EMI plans."
    },
    {
      icon: <FaCreditCard />,
      title: "Credit Cards",
      desc: "Exclusive cards with cashback rewards."
    },
    {
      icon: <FaLaptop />,
      title: "Net Banking",
      desc: "24/7 access to your account digitally."
    }
  ];

  return (
    <section className="services">
      <div className="services-heading">
        <span className="services-badge">OUR SERVICES</span>
        <h2>Smart Banking Solutions for Everyone</h2>
        <p>
          Explore modern banking products designed for savings,
          convenience and financial growth.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;