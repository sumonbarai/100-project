import { useEffect } from "react";
import taskDeleteAlert from "./taskDeleteAlert";
import taskUpdatePopUp from "./taskUpdatePopUp";

const TaskItem = ({ tasks }) => {
  // update to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <table className="table text-center ">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Task Name</th>
          <th scope="col">Edit</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{task}</td>
              <td>
                <button
                  onClick={() => taskUpdatePopUp(task)}
                  className="btn btn-sm btn-success"
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  onClick={() => taskDeleteAlert(task)}
                  className="btn btn-sm btn-danger"
                >
                  delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TaskItem;
