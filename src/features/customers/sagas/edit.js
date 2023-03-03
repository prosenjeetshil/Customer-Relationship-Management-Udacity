import AsyncStorage from "@react-native-async-storage/async-storage";
import { call, put, select, takeLatest } from "redux-saga/effects";
import * as actions from "../reducers";

export function* watchEditCustomer() {
  yield takeLatest(actions.editCustomer.toString(), takeEditCustomer);
}

function* takeEditCustomer(action) {
  console.log("Starting fetch request to API -- EDIT");

  const customerID = action.payload; 

  try {
    const fields = yield select((state) => state.customer.customerFields);
    const customers = yield select((state) => state.customer.list.customers);

    const result = customers.map((cust) => {
      if (cust.id !== customerID) return cust;
      return { ...fields };
    });

    yield call(
      [AsyncStorage, AsyncStorage.setItem],
      "customers",
      JSON.stringify(result)
    );
    yield put(actions.editCustomerResult(result)); // store save
  } catch (error) {
    yield put(actions.editCustomerError(error.toString()));
  }
}
