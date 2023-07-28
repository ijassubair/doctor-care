import rootReducer from "./root-reducer";
import { configureStore } from "@reduxjs/toolkit";

const middleWares = [];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleWares),
});
