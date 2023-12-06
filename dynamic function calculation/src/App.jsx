import { useState } from "react";
import "./App.css";

const initialState = {
  num1: 0,
  num2: 0,
};

function App() {
  const [input, setInput] = useState({ ...initialState });
  const [output, setOutput] = useState(0);
  const [calHistory, setCalHistory] = useState([]);

  const handleChange = (obj) => {
    setInput({
      ...input,
      ...obj,
    });
  };

  const historyGenerate = (stateObj, output, operator) => {
    const now = new Date();
    const createdAt = now.toLocaleDateString() + "," + now.toLocaleTimeString();
    const uniqueId = calHistory[0]?.id + 1 || 1;
    return {
      id: uniqueId,
      state: stateObj,
      output: output,
      operator: operator,
      createdAt: createdAt,
    };
  };

  const calculation = (operator) => {
    const fn = new Function(
      `operator`,
      `return ${input.num1} ${operator} ${input.num2}`
    );

    const result = fn(operator);
    setOutput(result);

    // after calculation then save the history
    const data = historyGenerate(input, result, operator);
    setCalHistory([data, ...calHistory]);
  };

  const handleReset = (id) => {
    const findHistory = calHistory.find((item) => item.id === id);
    setInput(findHistory.state);
    setOutput(findHistory.output);
    const remainingHistory = calHistory.filter((item) => item.id !== id);
    setCalHistory(remainingHistory);
  };

  return (
    <div>
      <h1>Result = {output}</h1>
      <input
        type="number"
        onChange={(e) => handleChange({ num1: e.target.value })}
        value={input.num1}
      />
      <input
        type="number"
        onChange={(e) => handleChange({ num2: e.target.value })}
        value={input.num2}
      />
      <div className="btn-group">
        <button onClick={() => calculation("+")}>+</button>
        <button onClick={() => calculation("-")}>-</button>
        <button onClick={() => calculation("*")}>*</button>
        <button onClick={() => calculation("/")}>/</button>
      </div>

      <h2>history section</h2>
      {calHistory.length < 1 ? (
        <small>there are no history</small>
      ) : (
        calHistory.map((item) => (
          <div key={item.id} style={{ display: "flex" }}>
            <p>
              {item.state.num1} {item.operator} {item.state.num2} ={" "}
              {item.output}
            </p>
            <p>, {item.createdAt}</p>
            <button onClick={() => handleReset(item.id)}>reset</button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
