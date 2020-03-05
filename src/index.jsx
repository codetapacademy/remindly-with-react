import React from 'react';
import { render } from 'react-dom';
import { ReminderApp } from './component/app';
import './font.css'
import './index.css'

const renderToDom = () => {
  const reminderApp = document.querySelector('#reminder-app')

  if(reminderApp !== null){
    render(
      <ReminderApp/>,
      reminderApp
    )
  }
}

renderToDom();

export { renderToDom }