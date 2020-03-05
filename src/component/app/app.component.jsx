import React, { useReducer, useRef } from 'react';
import { ActionBar } from '../action-bar';
import { Calendar } from '../calendar';
import { Modal } from '../modal';
import { reminderReducer, initialReminderValue, reminderListReducer, initialReminderList } from './app.reducer';
import { unsetReminderAction, addReminderToListAction, createReminderAction, deleteReminderAction } from './app.actions';
import moment from 'moment';

const ReminderApp = () => {
  const [currentReminder, setReminder] = useReducer(reminderReducer, initialReminderValue);
  const [reminderList, updateReminderList] = useReducer(reminderListReducer, initialReminderList);
  const dateForInput = moment((currentReminder && currentReminder.unix || undefined)).format('YYYY-MM-DD');
  const title = (currentReminder && currentReminder.title) || '';
  const time = (currentReminder && currentReminder.time) || '00:00';
  const myTitle = useRef();
  const myDate = useRef();
  const myTime = useRef();

  const onClose = () => {
    setReminder(unsetReminderAction())
  }

  const onDelete = () => {
    updateReminderList(deleteReminderAction(currentReminder))
    setReminder(unsetReminderAction())
  }

  const onSuccess = () => {
    if (myDate.current.value &&
      myTime.current.value &&
      myTitle.current.value) {

      const reminder = {
        title: myTitle.current.value,
        date: myDate.current.value,
        time: myTime.current.value,
        unix: moment(`${myDate.current.value} ${myTime.current.value}`).unix() * 1000,
        update: (currentReminder && currentReminder.update) || false,
      }

      updateReminderList(addReminderToListAction(reminder))
      setReminder(unsetReminderAction())
      }
  }

  return (
    <div>
      <ActionBar 
        setReminder={setReminder}
      />
      <Calendar 
        reminderList={reminderList}
        createReminderAction={createReminderAction}
        setReminder={setReminder}
      />
      {currentReminder && 
        <Modal 
          onSuccess={onSuccess}
          onClose={onClose}
          onDelete={onDelete}
        >
          <div>
            <div>
              <label htmlFor='title'>Title: </label>
              <input 
                defaultValue={title}
                ref={myTitle}
                id='title'
                maxLength={50}
                autoFocus
                type="title" 
                />
            </div>
            <div>
              <label htmlFor='date'>Date: </label>
              <input 
                defaultValue={dateForInput}
                ref={myDate}
                id='date'
                type="date" 
                />
            </div>
            <div>
              <label htmlFor='time'>Time: </label>
              <input 
                defaultValue={time}
                ref={myTime}
                id='time'
                type="time"  />
            </div>
          </div>
        </Modal>}
    </div>
  )
}

export { ReminderApp }