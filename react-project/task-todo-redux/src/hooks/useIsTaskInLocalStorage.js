import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updatedLocalStorage } from "../redux/features/task/taskSlice";

const useIsTaskInLocalStorage = () => {
  const dispatch = useDispatch();
  const [isStorage, setIsStorage] = useState(false);

  useEffect(() => {
    const tasks = localStorage.getItem("tasks");

    if (tasks) {
      const tasksArray = JSON.parse(tasks);
      dispatch(updatedLocalStorage(tasksArray));
    }
    setIsStorage(true);
  }, [dispatch]);

  return [isStorage];
};

export default useIsTaskInLocalStorage;
