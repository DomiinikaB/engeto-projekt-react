import React from "react";
import "../styles/questions.css";
import OneQuestion from "./OneQuestion";
import questions from "../assets/questions";
import { Link } from "react-router-dom";

const Questions = () => {
  return (
    <section className="question-section">
      <h1>Frequently Asked Questions</h1>
      <div className="questions-wrapper">
        {questions.map((oneQuestion) => (
          <OneQuestion
            key={oneQuestion.id}
            id={oneQuestion.id}
            title={oneQuestion.title}
            info={oneQuestion.info}
          />
        ))}
      </div>
      <p className="contact-call">
        Didn't find what you were looking for? Contact us!
      </p>
      <button className="contact-button">
        <Link to="/contact">Get in touch!</Link>
      </button>
    </section>
  );
};

export default Questions;
