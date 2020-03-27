import React, { useReducer, useRef } from 'react'
import { Actionbar } from '../action-bar'
import { Calendar } from '../calendar'
import { Modal } from '../modal'
import { reminderReducer, initialReminderValue, reminderListReducer, initialReminderList } from './app.reducer'
import { unsetReminderAction, addReminderToListAction } from './app.action'
import moment from 'moment'

const CalendarApp = () => {
  const [currentReminder, setReminder] = useReducer(reminderReducer, initialReminderValue)
  // console.log(currentReminder)

  const [reminderList, updateReminderList] = useReducer(reminderListReducer, initialReminderList)

  const awesomeTitle = useRef()
  const awesomeDate = useRef()
  const awesomeTime = useRef()

  const onClose = () => {
    setReminder(unsetReminderAction())
  }

  const onSuccess = () => {
    // the console.log will work only if value is added in the modal.
    if (awesomeTitle.current.value &&
      awesomeDate.current.value &&
      awesomeTime.current.value) {
        console.log(
          awesomeTitle.current.value,
          awesomeDate.current.value,
          awesomeTime.current.value,
        )

        const reminder = {
          title: awesomeTitle.current.value,
          date: awesomeDate.current.value,
          time: awesomeTime.current.value,
          unix: moment(`${awesomeDate.current.value} ${awesomeTime.current.value}`).unix() * 1000
        }

        updateReminderList(addReminderToListAction(reminder))
      }
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

        <pre>
          {JSON.stringify(reminderList, null, 2)}
        </pre>
    </div>
  )
}

export { CalendarApp }
