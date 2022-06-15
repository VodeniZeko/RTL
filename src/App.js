import { useState } from "react";
import "./App.css";

export function replaceCamelCaseWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [init, setInit] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const changeColor = () => setInit(!init);
  const disableButton = () => setIsDisabled(!isDisabled);

  const buttonBackground = !init ? "MediumVioletRed" : "MidnightBlue";
  const buttonText = init
    ? replaceCamelCaseWithSpaces("MediumVioletRed")
    : replaceCamelCaseWithSpaces("MidnightBlue");

  return (
    <div className="App">
      <button
        style={{ backgroundColor: buttonBackground }}
        onClick={changeColor}
        disabled={isDisabled}
      >
        {`Change to ${buttonText}`}
      </button>
      <label>
        Disable Button
        <input onClick={disableButton} type="checkbox" />
      </label>
    </div>
  );
}

export default App;
