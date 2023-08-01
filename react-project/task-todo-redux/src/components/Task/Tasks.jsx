import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { addTask } from "../../redux/features/task/taskSlice";
import taskExitsAlert from "./taskExitsAlert";

const Tasks = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);

  // add Task to store
  const handleSubmit = () => {
    if (input !== "") {
      const isExist = tasks.find((task) => task === input);
      if (isExist) {
        return taskExitsAlert();
      }
      dispatch(addTask(input));
      setInput("");
    }
  };
  // update to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className="container">
      <h1 className="text-center m-3">Redux Task application</h1>
      <div className="card shadow p-4">
        <div className="card-body">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add your task"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="input-group-text bg-success text-white"
              role="button"
              tabIndex="0"
              onClick={handleSubmit}
            >
              Add Task
            </button>
          </div>
        </div>
        {tasks.length < 1 ? (
          <h6 className="text-center">No task available here</h6>
        ) : (
          <TaskItem tasks={tasks} />
        )}
      </div>
    </div>
  );
};

export default Tasks;
