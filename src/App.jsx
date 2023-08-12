import { useState, useEffect } from "react";

export default function App() {
  // set state for which step we are on
  const [step, setStep] = useState(1);

  // save messages in a variable
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  const handleStepUp = () => {
    step < 3 && setStep(step + 1);
  };

  const handleStepDown = () => {
    step > 1 && setStep(step - 1);
  };

  useEffect(() => {
    console.log(`current step is ${step}`);
  }, [step]);

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step === 1 && "active"}>1</div>
        <div className={step === 2 && "active"}>2</div>
        <div className={step === 3 && "active"}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "white" }}
          onClick={handleStepDown}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "white" }}
          onClick={handleStepUp}
        >
          Next
        </button>
      </div>
    </div>
  );
}
