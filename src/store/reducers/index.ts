import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../../app/pages/admin/Dashboard/slice";

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add Reducers here
});

export default rootReducer;
