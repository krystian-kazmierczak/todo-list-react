import { all } from "redux-saga/effects";
import { watchFechtExampleTasks } from "./features/tasks/tasksSaga";

export default function* rootSaga() {
  yield all([watchFechtExampleTasks()]);
}
