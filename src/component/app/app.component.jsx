import React, { useReducer, useRef } from 'react'
import { Actionbar } from '../action-bar'
import { Calendar } from '../calendar'
import { Modal } from '../modal'
import { reminderReducer, initialReminderValue } from './app.reducer'
import { unsetReminderAction } from './app.action'
import moment from 'moment'

const CalendarApp = () => {
  const [currentReminder, setReminder] = useReducer(reminderReducer, initialReminderValue)
  // console.log(currentReminder)

  const awesomeTitle = useRef()
  const awesomeDate = useRef()
  const awesomeTime = useRef()

  const onClose = () => {
    setReminder(unsetReminderAction())
  }

  const onSuccess = () => {
    console.log(
      awesomeTitle.current.value,
      awesomeDate.current.value,
      awesomeTime.current.value,
    )
  }

  const dateForInput = moment((currentReminder && currentReminder.date || 0) * 1000).format('YYYY-MM-DD')
  console.log(dateForInput, currentReminder)

  return (
    <div>
      <Actionbar setReminder={setReminder}/>
      <Calendar />
      {currentReminder && (
        <Modal onClose={onClose} onSuccess={onSuccess}>
          <div>
            <div>
              <label htmlFor="title">Title: </label>
              <input 
                ref={awesomeTitle}
                type="title" 
                id="title"
                maxLength={25}
                autoFocus
              />
            </div>
            <div>
              <label htmlFor="date">Date: </label>
              <input 
                ref={awesomeDate}
                defaultValue={dateForInput}
                type="date" 
                id="date"
              />
            </div>
            <div>
              <label htmlFor="time">Time: </label>
              <input 
                ref={awesomeTime}
                type="time" 
                id="time"
              />
            </div>
          </div>
        </Modal>)}
    </div>
  )
}

export { CalendarApp }
