import { combineReducers } from "@reduxjs/toolkit";
import { appReducer } from "./appReducer/appReducer";
import { notifications } from "../components/molecules/notifier/notifierReducer";

const reducer = combineReducers({
  appReducer,
  notifications,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_STORE") {
    return reducer(undefined, action);
  }

  return reducer(state, action);
};

export default rootReducer;
