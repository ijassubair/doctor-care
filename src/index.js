import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AppLoader from "./components/atoms/appLoader/appLoader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<AppLoader />}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>
);
