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
    step < 3 && setStep(step + 1);
  };

  const handleStepDown = () => {
    step > 1 && setStep(step - 1);
  };

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      {isOpen === true ? (
        <h1 className="close" onClick={handleOpen}>
          close
        </h1>
      ) : (
        <h1 className="close" onClick={handleOpen}>
          open
        </h1>
      )}
      <div className={isOpen === true ? "steps" : "hidden"}>
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
    </div>
  );
}
