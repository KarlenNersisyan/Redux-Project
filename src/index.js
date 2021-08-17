import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Redux from "./components/Redux/Redux";
import { store } from "./redux/store";
import ReduxToolkit from "./components/ReduxToolkit/ReduxToolkit";
import { storeTk } from "./redux-toolkit/storeTk";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Provider store={store}>
      <Redux />
    </Provider>
    <Provider store={storeTk}>
      <ReduxToolkit />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
