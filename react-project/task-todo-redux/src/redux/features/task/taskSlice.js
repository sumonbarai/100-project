import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      // payload property will be a simple string
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      // payload property will be a simple string
      const remainingTask = state.tasks.filter(
        (task) => task !== action.payload
      );
      state.tasks = remainingTask;
    },
    updatedTask: (state, action) => {
      // payload will be an object with oldTask and newTask

      const taskIndex = state.tasks.findIndex(
        (task) => task === action.payload.oldTask
      );
      state.tasks[taskIndex] = action.payload.newTask;
    },
    updatedLocalStorage: (state, action) => {
      // local storage data here in action
      state.tasks = action.payload;
    },
  },
});

export default taskSlice.reducer;
export const { addTask, removeTask, updatedTask, updatedLocalStorage } =
  taskSlice.actions;
