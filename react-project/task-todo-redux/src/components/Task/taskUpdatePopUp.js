import Swal from "sweetalert2";
import store from "../../redux/app/store";
import { updatedTask } from "../../redux/features/task/taskSlice";

const taskUpdatePopUp = (oldTask) => {
  Swal.fire({
    title: "Update your Task Name",
    input: "text",
    inputValue: oldTask,
    inputValidator: (value) => {
      if (value) {
        store.dispatch(updatedTask({ oldTask, newTask: value }));
      }
    },
    showCancelButton: true,
    confirmButtonText: "Update",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Updated!", "Your Task is Updated.", "success");
    }
  });
};

export default taskUpdatePopUp;
//
