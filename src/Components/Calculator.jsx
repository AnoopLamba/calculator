import { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import ButtonsData from "../data/ButtonsData";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // function to handle button click
  const handleButtonClick = (value) => {
    if (value === "=") {
      evaluateExpression();
    } else if (value === "C") {
      clearInput();
    } else {
      setInput((prevState) => prevState + value);
    }
  };

  // to evaluate the expression entered
  const evaluateExpression = () => {
    try {
      setResult(eval(input).toString());
    } catch (e) {
      setResult("Error !");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="calculator p-3">
      <Display input={input} result={result} />
      <div className="buttons">
        {ButtonsData.map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
