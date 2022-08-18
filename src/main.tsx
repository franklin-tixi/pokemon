import React from "react";
import ReactDOM from "react-dom/";
import App from "./App";
import "./index.css";
import "./components/button/AppButton.css";
import "./components/dialog/AppFormDialog.css";
import "./components/inputs/AppTextField.css";
import "./components/table/AppTable.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
