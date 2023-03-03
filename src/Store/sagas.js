import { all } from "redux-saga/effects";
import customer from "../features/customers/sagas";

export function* rootSaga() {
  yield all([customer()]);
}
