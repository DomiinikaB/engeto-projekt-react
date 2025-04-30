import React from "react";
import { useState } from "react";
import PersonalInfo from "../components/form/PersonalInfo";
import SuccessForm from "../components/form/SuccessForm";

const Contact = () => {
  const [step, setStep] = useState(1);

  const handleStep = () => {
    setStep(step + 1);
  };
  return (
    <section>
      {step === 1 && <PersonalInfo next={handleStep} />}
      {step === 2 && <SuccessForm />}
    </section>
  );
};

export default Contact;
