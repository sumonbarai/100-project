import Swal from "sweetalert2";

const taskExitsAlert = () => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Task already exist",
  });
};
export default taskExitsAlert;
