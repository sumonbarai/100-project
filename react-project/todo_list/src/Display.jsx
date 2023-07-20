import Todo from "./components/Todo";

const Display = ({ todos, onRemoveHandler }) => {
  // if no task here
  if (todos.length < 1) {
    return <p className="no-task">No Task Here</p>;
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} onRemoveHandler={onRemoveHandler} todo={todo} />
      ))}
    </div>
  );
};

export default Display;
