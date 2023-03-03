import { all } from "redux-saga/effects";
import { watchCreateCustomer, watchGetExistingCustomers} from "./create";
import { watchEditCustomer } from "./edit";
import { watchClearStorage } from "./clear";

export default function* customer() {
  yield all([
    watchCreateCustomer(),
    watchGetExistingCustomers(),
    watchClearStorage(),
    watchEditCustomer(),
  ]);
}
