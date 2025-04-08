import React from "react";
import "./SuccessForm.css";
import { Link } from "react-router-dom";
import { BsEnvelopePaperHeart } from "react-icons/bs";

const SuccessForm = () => {
  return (
    <section className="success-section">
      <BsEnvelopePaperHeart className="success-icon" />
      <p className="success-message">
        Thank you for your message! We will get back to you as soon as possible.
      </p>
      <button className="dark-button">
        <Link to="/">Go back home</Link>
      </button>
    </section>
  );
};

export default SuccessForm;
