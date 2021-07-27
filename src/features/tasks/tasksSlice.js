import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDoneTasks: false,
  },
  reducers: {
    addNewTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDoneTasks: (state) => {
      state.hideDoneTasks = !state.hideDoneTasks;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks.splice(index, 1);
    },
    setAllTaskDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
      }
    },
    fetchExampleTasks: (state) => {},
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
  },
  },
});

export const {
  addNewTask,
  toggleHideDoneTasks,
  toggleTaskDone,
  removeTask,
  setAllTaskDone,
  fetchExampleTasks,
  setTasks,
} = tasksSlice.actions;

const selectTaskState = (state) => state.tasks;

export const selectTasks = (state) => selectTaskState(state).tasks;
export const selectHideDoneTasks = (state) =>
  selectTaskState(state).hideDoneTasks;
export const selectAreTasksEmpty = (state) => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = (state) =>
  selectTasks(state).every(({ done }) => done);

export default tasksSlice.reducer;
