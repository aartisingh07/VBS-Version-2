import React from "react";
import "../../styles/Home/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-left">
        <span className="contact-badge">CONTACT US</span>
        <h2>Need Help? We're Here For You</h2>
        <p>
          Reach out to VBS Bank support for account queries,
          loans, cards, and digital banking assistance.
        </p>

        <div className="contact-info">
          <p>📞 +91 98765 43210</p>
          <p>📧 support@vbsbank.com</p>
          <p>📍 Mumbai, India</p>
        </div>
      </div>

      <div className="contact-right">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;