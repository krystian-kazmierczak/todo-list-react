import { call, put, takeLatest } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setTasks } from "./tasksSlice";

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

export function* watchFechtExampleTasks() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}
