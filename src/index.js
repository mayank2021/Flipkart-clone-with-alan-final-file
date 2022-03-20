import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import UserDataContextProvider from "./context/UserData";

ReactDOM.render(
  <UserDataContextProvider>
    <Router>
      <App />
    </Router>
  </UserDataContextProvider>,
  document.getElementById("root")
);
