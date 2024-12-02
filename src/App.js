import React, { useState } from "react";
import "./App.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult(null);
    } else if (value === "=") {
      try {
        setResult(eval(input)); // Avoid using eval in production; use safer alternatives.
      } catch (error) {
        setResult("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result !== null ? `= ${result}` : ""}</div>
      </div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "+", "C", "="].map(
          (btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className={`button ${btn === "=" ? "equals" : ""}`}
            >
              {btn}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Calculator;
