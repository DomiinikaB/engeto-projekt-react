import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-section">
      <h1 className="error-title">404</h1>
      <h2 className="error-subtitle">Ooops! Something went wrong.</h2>
      <button className="home-button">
        <Link to="/">Go back home</Link>
      </button>
    </section>
  );
};

export default Error;
