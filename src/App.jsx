import { useState, useEffect } from "react";

export default function App() {
  // set state for which step we are on
  const [step, setStep] = useState(1);
  // set state to open the app
  const [isOpen, setIsOpen] = useState(true);

  // save messages in a variable
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  const handleStepUp = () => {
    setStep(step === 3 ? 1 : step + 1);
  };

  const handleStepDown = () => {
    setStep(step === 1 ? 3 : step - 1);
  };

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      {isOpen ? (
        <button className="close" onClick={handleOpen}>
          &times;
        </button>
      ) : (
        <h1 className="open" onClick={handleOpen}>
          Open Steps Project
        </h1>
      )}
      <div className={isOpen ? "steps" : "hidden"}>
        <div className="numbers">
          <div className={step === 1 ? "active" : ""}>1</div>
          <div className={step === 2 ? "active" : ""}>2</div>
          <div className={step === 3 ? "active" : ""}>3</div>
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
    </div>
  );
}
