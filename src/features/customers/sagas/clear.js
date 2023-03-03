import AsyncStorage from "@react-native-async-storage/async-storage";
import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../reducers";

export function* watchClearStorage() {
    console.log("clearing storage...");
    yield takeLatest(actions.clearStorage.toString(), takeClearStorage);
  }
  
  function* takeClearStorage() {
    try {
      yield call(AsyncStorage.clear);
      yield put(actions.clearCustomers([]));
    } catch (err) {
      yield put(actions.clearStorageError());
    }
  }
  