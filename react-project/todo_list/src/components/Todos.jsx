const Todos = ({ todos, onHandler }) => {
  // handle form
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = e.target.userInput.value;
    const isExist = todos.find((todo) => todo === newTodo);
    if (isExist) {
      window.alert("Todo already exists");
      return;
    }
    onHandler([...todos, newTodo]);
    e.target.userInput.value = "";
  };
  return (
    <>
      <div className="form-area">
        <form onSubmit={handleSubmit}>
          <input name="userInput" placeholder="Text here..."></input>
          <button className="btn">submit</button>
        </form>
      </div>
    </>
  );
};

export default Todos;
