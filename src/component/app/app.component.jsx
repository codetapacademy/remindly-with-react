import React from 'react'
import { ActionBar } from '../action-bar'
import { Calendar } from '../calendar'
import { Modal } from '../modal'

const CalendarApp = () => {
  return (
  <div>
    <ActionBar/>
    <Calendar/>
    <Modal/>
  </div>
  )
}

export { CalendarApp }