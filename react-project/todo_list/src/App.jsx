import { useState } from "react";
import "./App.css";
import Display from "./Display";
import Header from "./components/Header";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  const onRemoveHandler = (todo) => {
    const remaining = todos.filter((item) => item !== todo);
    setTodos(remaining);
  };
  return (
    <div className="container">
      <Header text="simple Todo list" />
      <Todos todos={todos} onHandler={setTodos} />
      <Display todos={todos} onRemoveHandler={onRemoveHandler} />
    </div>
  );
}

export default App;
