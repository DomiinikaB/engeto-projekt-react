import React from "react";
import "./OneQuestion.css";
import { useState } from "react";

const OneQuestion = ({ title, info }) => {
  const [show, setShow] = useState(false);

  return (
    <section className="question-box">
      <div className="question-header">
        <h2>{title}</h2>
        <button onClick={() => setShow(!show)}>Answer</button>
      </div>
      {show && <p className="info">{info}</p>}
    </section>
  );
};

export default OneQuestion;
