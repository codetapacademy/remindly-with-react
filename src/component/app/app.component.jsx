import React, { useReducer, useRef } from 'react';
import { ActionBar } from '../action-bar';
import { Calendar } from '../calendar';
import { Modal } from '../modal';
import {
  initialReminderValue,
  reminderReducer,
  reminderListReducer,
  initialReminderList
} from './app.reducer';
import { unsetReminderAction, addReminderToListAction } from './app.action';
import moment from 'moment';
import { INITIALIZE_REMINDER_LIST } from './app.const';

const RecallApp = () => {
  const [currentReminder, setReminder] = useReducer(
    reminderReducer,
    initialReminderValue
  );

  const [reminderList, updateReminderList] = useReducer(
    reminderListReducer,
    initialReminderList
  );

  const dateForInput = moment(
    ((currentReminder && currentReminder.date) || 0) * 1000
  ).format('YYYY-MM-DD');
  console.log(dateForInput, currentReminder);

  const myTitle = useRef();
  const myDate = useRef();
  const myTime = useRef();

  const onClose = () => {
    // close the modal
    setReminder(unsetReminderAction());
  };

  const onSuccess = () => {
    // only add if all values are filled
    if (myTitle.current.value && myDate.current.value && myTime.current.value) {
      console.log(
        myTitle.current.value,
        myDate.current.value,
        myTime.current.value
      );

      const reminder = {
        title: myTitle.current.value,
        date: myDate.current.value,
        time: myTime.current.value,
        unix:
          moment(`${myDate.current.value} ${myTime.current.value}`).unix() *
          1000
      };

      updateReminderList(addReminderToListAction(reminder));
    }
  };

  return (
    <div>
      <ActionBar setReminder={setReminder} />
      <Calendar reminderList={reminderList} />
      {currentReminder && (
        <Modal onClose={onClose} onSuccess={onSuccess}>
          <div>
            <div>
              <label htmlFor="title">Title: </label>
              <input ref={myTitle} id="title" maxLength={25} autoFocus />
            </div>
            <div>
              <label htmlFor="date">Date: </label>
              <input
                ref={myDate}
                defaultValue={dateForInput}
                type="date"
                id="date"
              />
            </div>
            <div>
              <label htmlFor="time">Time: </label>
              <input ref={myTime} type="time" id="time" />
            </div>
          </div>
        </Modal>
      )}
      <pre>{JSON.stringify(reminderList, null, 2)}</pre>
    </div>
  );
};

export { RecallApp };
