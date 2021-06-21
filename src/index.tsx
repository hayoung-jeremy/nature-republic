import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";

import App from "./components/App";
import history from "lib/routes/history";

// Provider from react-redux,
// store,
// main.scss

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
