import React, { useReducer, useRef } from "react";
import { ActionBar } from "../action-bar";
import { Calendar } from "../calendar";
import { Modal } from "../modal/modal.component";
import { initialReminderValue, reminderReducer } from "./app.reducer";
import { unsetReminderAction } from "./app.action";
import moment from "moment";

const ReamindlyApp = () => {
  const [currentReminder, setReminder] = useReducer(
    reminderReducer,
    initialReminderValue
  );
  // const dateForInput = moment(
  //   ((currentReminder && currentReminder.date) || 0) * 1000
  // ).format("YYYY-MM-DD");

  const dateForInput = moment((currentReminder && currentReminder.date || 0) * 1000).format('YYYY-MM-DD')

  console.log(dateForInput);

  const myTitle = useRef();
  const myDate = useRef();
  const myTime = useRef();

  const onClose = () => {
    setReminder(unsetReminderAction());
  };

  const onSuccess = () => {
    console.log(myTitle.current.value, myDate.current.value, myTime.current.value);
  };

  return (
    <div>
      <ActionBar setReminder={setReminder} />
      <Calendar />
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
                type="date"
                id="date"
                defaultValue={dateForInput}
              />
            </div>
            <div>
              <label htmlFor="time">Time: </label>
              <input ref={myTime} type="time" id="time" />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export { ReamindlyApp };
