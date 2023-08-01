import Swal from "sweetalert2";
import store from "../../redux/app/store";
import { removeTask } from "../../redux/features/task/taskSlice";

const taskDeleteAlert = (task) => {
  Swal.fire({
    title: "Are you sure?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#0F5132",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      store.dispatch(removeTask(task));
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });
};

export default taskDeleteAlert;
