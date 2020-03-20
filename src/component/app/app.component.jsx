import React from 'react'
import { Actionbar } from '../action-bar'
import { Calendar } from '../calendar'
import { Modal } from '../modal'

const CalendarApp = () => {
  return (
    <div>
      <Actionbar />
      <Calendar />
      <Modal />
    </div>
  )
}

export { CalendarApp }
