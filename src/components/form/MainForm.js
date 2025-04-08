import React from "react";
import PersonalInfo from "./PersonalInfo";
import SuccessForm from "./SuccessForm";
import { useState } from "react";

const MainForm = () => {
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

export default MainForm;
