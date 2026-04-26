import React from "react";
import cardImage from "../../assets/debit-card.png";
import "../../styles/Home/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="hero-badge">WELCOME TO VBS BANK</span>

        <h1>
          Banking Made <span>Smarter</span>, Faster & Safer
        </h1>

        <p>
          Experience next generation digital banking with secure transfers,
          instant account opening and smart money management.
        </p>

        <div className="hero-buttons">
          <button className="open-account">Open Account</button>
          <button className="login-account">Login</button>
        </div>

        <div className="hero-features">
          <span>✔ Bank-level Security</span>
          <span>✔ 24/7 Access</span>
          <span>✔ Fast Transfers</span>
        </div>
      </div>

      <div className="hero-right">
        <div className="preview-card">

          <div className="bank-card-image">
            <img src={cardImage} alt="VBS Debit Card" />
            <div className="card-shine"></div>
          </div>

          <div className="card-benefits">
            <span>💳 Zero Charges</span>
            <span>⚡ Instant Access</span>
            <span>🔒 Safe Payments</span>
            <span>🎁 Cashback Rewards</span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;