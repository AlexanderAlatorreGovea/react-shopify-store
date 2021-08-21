import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Client from "shopify-buy";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import store from './redux/store';

import "./index.scss";

//const store = createStore(rootReducer);

const client = Client.buildClient({
  storefrontAccessToken: process.env.REACT_APP_API_KEY,
  domain: process.env.REACT_APP_BASE_URL,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App client={client} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
