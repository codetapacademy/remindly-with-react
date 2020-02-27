import React from "react";
import { render } from "react-dom";
import { ReamindlyApp } from "./component/app";

const renderToDom = () => {
  const remindlyApp = document.querySelector("#remindly-app");
  if (remindlyApp !== null) {
    render(<ReamindlyApp />, remindlyApp);
  }
};

renderToDom();

export { renderToDom };
