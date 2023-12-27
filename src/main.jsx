import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";

import ToggleColorModeProvider from "./utils/ToggleColorMode";
import App from "./components/App";
// import store from "./app/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  <ToggleColorModeProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ToggleColorModeProvider>
  // </Provider>
);
