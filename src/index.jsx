import React from 'react'
import { render } from 'react-dom'
import { CalendarApp } from './component/app'
import './font.css'
import './index.css'

const renderToDom = () => {
  const calendarApp = document.querySelector('#calendar-app')
  if(calendarApp !== null){
    render(
      <CalendarApp/>,
      calendarApp
    )
  }
}

renderToDom();

export { renderToDom }