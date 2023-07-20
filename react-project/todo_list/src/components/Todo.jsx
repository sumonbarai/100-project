const Todo = ({ todo, onRemoveHandler }) => {
  return (
    <div className="todo-list">
      <p>{todo}</p>
      <button onClick={() => onRemoveHandler(todo)}>remove</button>
    </div>
  );
};

export default Todo;
