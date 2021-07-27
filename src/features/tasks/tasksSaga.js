import { call, put, select, takeLatest, takeEvery } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(
      alert,
      "Przykro mi 😞 Wystąpił problem z ładowaniem przykładowych zadań. Spróbuj ponownie później 😊"
    );
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
};


export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
