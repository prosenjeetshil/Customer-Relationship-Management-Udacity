import { combineReducers } from "@reduxjs/toolkit";
import customer from "../features/customers/reducers";

const rootReducer = combineReducers({
  customer,
});

export default rootReducer;
