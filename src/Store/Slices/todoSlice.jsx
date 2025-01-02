import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, newTask } = action.payload;
      const task = state.find((item) => item.id === id);
      if (task) {
        task.task = newTask;
      }
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      const index = state.findIndex((item) => item.id === taskId);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    deleteAll: (state) => {
      return state = [];
    },
  },
});

export const { addTask, editTask, deleteTask, deleteAll } = todoSlice.actions;
export default todoSlice.reducer;
