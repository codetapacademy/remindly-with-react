import React from 'react';
import { render } from 'react-dom';
import { RecallApp } from './component/app/app.component';

const renderToDom = () => {
  const recallApp = document.querySelector('#recall-app');

  if (recallApp !== null) {
    render(<RecallApp />, recallApp);
  }
};

renderToDom();

export { renderToDom };
