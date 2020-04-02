import React, { useReducer, useRef } from 'react'
import { Actionbar } from '../action-bar'
import { Calendar } from '../calendar'
import { Modal } from '../modal'
import { reminderReducer, initialReminderValue, reminderListReducer, initialReminderList } from './app.reducer'
import { unsetReminderAction, addReminderToListAction, createReminderAction, deleteReminderAction } from './app.action'
import moment from 'moment'

const CalendarApp = () => {
  const [currentReminder, setReminder] = useReducer(reminderReducer, initialReminderValue)

  const [reminderList, updateReminderList] = useReducer(reminderListReducer, initialReminderList)

  // const dateForInput = (currentReminder && currentReminder.date)
  const dateForInput = moment((currentReminder && currentReminder.unix || undefined)).format('YYYY-MM-DD')
  console.log('dateForInput', dateForInput)
  console.log('currentReminder', currentReminder && currentReminder)

  const title = (currentReminder && currentReminder.title) || ''
  const time = (currentReminder && currentReminder.time) || '00:00'


  const awesomeTitle = useRef()
  const awesomeDate = useRef()
  const awesomeTime = useRef()

  const onClose = () => {
    // close the modal
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

        console.log(currentReminder)

        const reminder = {
          title: awesomeTitle.current.value,
          date: awesomeDate.current.value,
          time: awesomeTime.current.value,
          unix: moment(`${awesomeDate.current.value} ${awesomeTime.current.value}`).unix() * 1000,
          update: (currentReminder && currentReminder.update) || false,
        }

        updateReminderList(addReminderToListAction(reminder))
        
      }
  }

  const onDelete = () => {
    // delete/remove a reminder
    updateReminderList(deleteReminderAction(currentReminder))
    setReminder(unsetReminderAction())
  }


  return (
    <div>
      <Actionbar setReminder={setReminder} />
      <Calendar 
        reminderList={reminderList} 
        createReminderAction={createReminderAction}
        setReminder={setReminder}
        />
      {currentReminder && (
        <Modal
          onClose={onClose}
          onSuccess={onSuccess}
          onDelete={onDelete}

        >
          <div>
            <div>
              <label htmlFor="title">Title: </label>
              <input 
                defaultValue={title}
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
                defaultValue={time}
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
