import AsyncStorage from "@react-native-async-storage/async-storage";
import { call, put, select, takeLatest } from "redux-saga/effects";
import * as actions from "../reducers";

export function* watchCreateCustomer() {
  yield takeLatest(actions.createCustomerStatus.toString(), takeCreateCustomer); // this root saga listens to action  and runs the other saga function
}

function* takeCreateCustomer() {
  console.log("Starting fetch request to API - CREATE CUSTOMERS");

  try {
    const fields = yield select((state) => state.customer.customerFields);

    const customers = yield select((state) => state.customer.list.customers);

    const customer = {
      id: customers.length + 1,
      ...fields,
    };
    const result = [customer, ...customers];

    yield call(
      [AsyncStorage, AsyncStorage.setItem],
      "customers",
      JSON.stringify(result)
    );
    yield put(actions.createCustomerResult(result)); // store save
  } catch (error) {
    yield put(actions.createCustomerError(error.toString()));
  }
}

export function* watchGetExistingCustomers() {
  console.log("listening to fetch request");
  yield takeLatest(actions.fetchCustomers.toString(), takeGetExistingCustomers);
}

function* takeGetExistingCustomers() {
  console.log("Starting fetch request to get existing CUSTOMERS");
  try {
    const customersData = yield call(
      [AsyncStorage, AsyncStorage.getItem],
      "customers"
    );
    const parsedCustomers = customersData ? JSON.parse(customersData) : [];
    console.log("parsedCustomers", parsedCustomers);
    yield put(actions.setExistingCustomers(parsedCustomers));
  } catch (error) {
    yield put(actions.fetchCustomersError(error.toString()));
  }
}
