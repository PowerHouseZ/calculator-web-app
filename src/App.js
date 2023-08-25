import React, { useState } from "react";
import "./App.css";

function Button({ value, className, onClick }) {
  return (
    <input
      type="button"
      value={value}
      className={`button ${className}`}
      onClick={onClick}
    />
  );
}

function App() {
  const [result, setResult] = useState("");
  const [calculatorOn, setCalculatorOn] = useState(true);

  const handleButtonClick = (value) => {
    if (!calculatorOn) {
      return;
    }

    if (result === "Error") {
      setResult("");
    }

    if (value === "=") {
      try {
        setResult(eval(result).toString());
      } catch (error) {
        setResult("Error");
      }
    } else {
      setResult((prevResult) => prevResult + value);
    }
  };

  const handleClear = () => {
    setResult("");
  };

  const handlePowerToggle = () => {
    if (calculatorOn) {
      setCalculatorOn(false);
      setResult("");
    } else {
      setCalculatorOn(true);
      setResult("");
    }
  };

  return (
    <div className={`calc ${calculatorOn ? "" : "off"}`}>
      <input type="text" placeholder="0" id="answer" value={result} />
      <Button value="7" onClick={() => handleButtonClick("7")} />
      <Button value="8" onClick={() => handleButtonClick("8")} />
      <Button value="9" onClick={() => handleButtonClick("9")} />
      <Button value="CLEAR" className="button1" onClick={handleClear} />
      <Button value="4" onClick={() => handleButtonClick("4")} />
      <Button value="5" onClick={() => handleButtonClick("5")} />
      <Button value="6" onClick={() => handleButtonClick("6")} />
      <Button value="ON/OFF" className="button1" onClick={handlePowerToggle} />
      <Button value="1" onClick={() => handleButtonClick("1")} />
      <Button value="2" onClick={() => handleButtonClick("2")} />
      <Button value="3" onClick={() => handleButtonClick("3")} />
      <Button value="DEL" onClick={() => setResult(result.slice(0, -1))} />
      <Button value="0" onClick={() => handleButtonClick("0")} />
      <Button value="/" onClick={() => handleButtonClick("/")} />
      <Button value="*" onClick={() => handleButtonClick("*")} />
      <Button value="-" onClick={() => handleButtonClick("-")} />
      <Button value="+" onClick={() => handleButtonClick("+")} />
      <Button value="%" onClick={() => handleButtonClick("%")} />
      <Button value="." onClick={() => handleButtonClick(".")} />
      <Button value="=" onClick={() => handleButtonClick("=")} />
    </div>
  );
}

export default App;
