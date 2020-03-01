import React from "react";
import { render } from "react-dom";
import { ReamindlyApp } from "./component/app";
import "./font.css";
import "./index.css";

const renderToDom = () => {
  const remindlyApp = document.querySelector("#remindly-app");
  if (remindlyApp !== null) {
    render(<ReamindlyApp />, remindlyApp);
  }
};

renderToDom();

export { renderToDom };
