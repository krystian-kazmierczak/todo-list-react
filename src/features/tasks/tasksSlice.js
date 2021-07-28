import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDoneTasks: false,
    loading: false,
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
    fetchExampleTasks: (state) => {
      state.loading = true;
    },
    fetchExampleTasksSuccess: (state, { payload: tasks }) => {
      state.tasks = tasks;
      state.loading = false;
    },
    fetchExampleTasksError: (state) => {
      state.loading = false;
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
  fetchExampleTasksSuccess,
  fetchExampleTasksError
} = tasksSlice.actions;

const selectTaskState = (state) => state.tasks;

export const selectTasks = (state) => selectTaskState(state).tasks;
export const selectHideDoneTasks = (state) => selectTaskState(state).hideDoneTasks;
export const selectLoading = state => selectTaskState(state).loading;
export const selectAreTasksEmpty = (state) => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = (state) => selectTasks(state).every(({ done }) => done);
export const getTaskById = (state, taskId) => selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);
  if (!query || query.trim() === "") {
    return tasks;
  }

  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default tasksSlice.reducer;
