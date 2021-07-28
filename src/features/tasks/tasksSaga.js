import {
  call,
  put,
  select,
  takeLatest,
  takeEvery,
  delay,
} from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import {
  fetchExampleTasks,
  fetchExampleTasksError,
  fetchExampleTasksSuccess,
  selectTasks,
} from "./tasksSlice";

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield delay(1000);
    yield put(fetchExampleTasksSuccess(exampleTasks));
  } catch (error) {
    yield put(fetchExampleTasksError());
    yield call(
      alert,
      "Przykro mi 😞 Wystąpił problem z ładowaniem przykładowych zadań. Spróbuj ponownie później 😊"
    );
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
