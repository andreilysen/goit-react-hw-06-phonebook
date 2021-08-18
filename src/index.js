import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRoute } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import store from "./redux/store";
import App from "./Components/App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        {/* <BrowserRoute> */}
        <App />
        {/* </BrowserRoute> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
