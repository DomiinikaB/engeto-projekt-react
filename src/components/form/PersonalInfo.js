import React from "react";
import "./PersonalInfo.css";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const PersonalInfo = ({ next }) => {
  const nameInputRef = useRef(null);
  const surnameInputRef = useRef(null);
  const numberInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  const validate = (e) => {
    e.preventDefault();
    if (nameInputRef.current.value.length < 3) {
      alert("The name must be at least three characters!");
      return;
    }
    if (surnameInputRef.current.value.length < 3) {
      alert("The surname must be at least three characters!");
      return;
    }
    if (isNaN(numberInputRef.current.value)) {
      alert("Enter numbers only!");
      return;
    }
    if (numberInputRef.current.value.length < 9) {
      alert("The phone number must be at least nine characters!");
      return;
    }
    if (
      emailInputRef.current.value.length < 4 ||
      !emailInputRef.current.value.includes("@") ||
      !emailInputRef.current.value.includes(".")
    ) {
      alert(
        "The email must be at least four characters and contain an at sign and a period!"
      );
      return;
    }
    if (messageRef.current.value === "") {
      alert("Please enter a message!");
      return;
    }
    next();
  };

  return (
    <article>
      <h1>Contact Form</h1>
      <p className="form-info">
        Planning your next adventure? Let us know which destination you're
        dreaming of, your preferred travel dates, and any other details you'd
        like us to consider. Our team will prepare a personalized price offer
        tailored to your wishes. We'll take care of everything – from flights
        and accommodation to special experiences – to make sure your holiday is
        stress-free, memorable, and truly unforgettable.
      </p>
      <form onSubmit={validate}>
        <div className="row">
          <input type="text" placeholder="Name" ref={nameInputRef} />
          <input type="text" placeholder="Surname" ref={surnameInputRef} />
        </div>

        <div className="row">
          <input type="tel" placeholder="Phone Number" ref={numberInputRef} />
          <input type="email" placeholder="Email Address" ref={emailInputRef} />
        </div>

        <textarea name="message" placeholder="Your Message" ref={messageRef} />

        <button type="submit" className="submit-button">
          Send
        </button>
      </form>
      <button className="dark-button">
        <Link to="/">Go back home</Link>
      </button>
    </article>
  );
};

export default PersonalInfo;
