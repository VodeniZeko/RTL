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

  const buttonBackground = !init ? "red" : "blue";
  const buttonText = !init ? "Change to Blue" : "Change to Red";

  return (
    <div className="App">
      <button
        style={{ backgroundColor: buttonBackground }}
        onClick={changeColor}
        disabled={isDisabled}
      >
        {buttonText}
      </button>
      <label>
        Disable Button
        <input onClick={disableButton} type="checkbox" />
      </label>
    </div>
  );
}

export default App;
