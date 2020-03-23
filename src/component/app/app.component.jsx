import React, { useReducer } from 'react'
import { Actionbar } from '../action-bar'
import { Calendar } from '../calendar'
import { Modal } from '../modal'
import { reminderReducer, initialReminderValue } from './app.reducer'

const CalendarApp = () => {
  const [currentReminder, setReminder] = useReducer(reminderReducer, initialReminderValue)
  // console.log(currentReminder)

  return (
    <div>
      <Actionbar setReminder={setReminder}/>
      <Calendar />
      {currentReminder && <Modal />}
    </div>
  )
}

export { CalendarApp }
