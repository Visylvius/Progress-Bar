import React, { useState, useEffect } from "react";

import { MAX_PERCENT } from "./consts";
import ProgressCircle from "./ProgressCircle";

import "./App.css";

function App() {
  // Determines if the Progress circle is active
  const [isActive, setIsActive] = useState(false);
  /** Current percentage, responsible for the text, and the calculation of the dashOffset */
  const [currentPercentage, setPercentage] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        setPercentage((percentage) => {
          if (percentage < MAX_PERCENT) {
            return percentage + 1;
          }
          return percentage;
        });
      }, 1000);

      if (!isActive) {
        clearInterval(intervalId);
      }
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  return (
    <div className="App">
      <ProgressCircle percentage={currentPercentage} />
      <div className="App-buttonContainer">
        <button className="App-buttonElement" onClick={() => setIsActive(true)}>
          Activate
        </button>
        <button
          className="App-buttonElement"
          onClick={() => setIsActive(false)}
        >
          Deactivate
        </button>
      </div>
    </div>
  );
}

export default App;
