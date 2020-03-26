import React, { useReducer } from 'react'
import { Actionbar } from '../action-bar'
import { Calendar } from '../calendar'
import { Modal } from '../modal'
import { reminderReducer, initialReminderValue } from './app.reducer'
import { unsetReminderAction } from './app.action'
import moment from 'moment'

const CalendarApp = () => {
  const [currentReminder, setReminder] = useReducer(reminderReducer, initialReminderValue)
  // console.log(currentReminder)

  const onClose = () => {
    setReminder(unsetReminderAction())
  }

  const dateForInput = moment((currentReminder && currentReminder.date || 0) * 1000).format('YYYY-MM-DD')
  console.log(dateForInput, currentReminder)

  return (
    <div>
      <Actionbar setReminder={setReminder}/>
      <Calendar />
      {currentReminder && (<Modal onClose={onClose}>
          <div>
            <div>
              <label htmlFor="date">Date: </label>
              <input 
                data-date-format="YYYY MM DD"
                type="date" 
                id="date"
                value={dateForInput}
                onChange={() => {}}
              />
            </div>
            <div>
              <label htmlFor="time">Time: </label>
              <input 
                type="time" 
                id="time"
                value={'00:00'}
                onChange={() => {}}
              />
            </div>
          </div>
        </Modal>)}
    </div>
  )
}

export { CalendarApp }
