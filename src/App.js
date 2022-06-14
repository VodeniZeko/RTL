import { useState } from "react";
import "./App.css";

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
      <input onClick={disableButton} type="checkbox" />
    </div>
  );
}

export default App;
