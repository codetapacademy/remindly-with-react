import React, { useReducer, useRef } from "react";
import { ActionBar } from "../action-bar";
import { Calendar } from "../calendar";
import { Modal } from "../modal/modal.component";
import {
  initialReminderValue,
  reminderReducer,
  reminderListReducer,
  initialReminderList
} from "./app.reducer";
import {
  unsetReminderAction,
  addReminderToListAction,
  createReminderAction,
  deleteReminderAction
} from "./app.action";
import moment from "moment";

const ReamindlyApp = () => {
  const [currentReminder, setReminder] = useReducer(
    reminderReducer,
    initialReminderValue
  );

  const [reminderList, updateReminderList] = useReducer(
    reminderListReducer,
    initialReminderList
  );

  // const dateForInput =
  //   (currentReminder && currentReminder.date) ||
  //   moment(((currentReminder && currentReminder.date) || 0) * 1000).format(
  //     "YYYY-MM-DD"
  //   );
  const dateForInput = moment(
    (currentReminder && currentReminder.unix) || undefined
  ).format("YYYY-MM-DD");

  const title = (currentReminder && currentReminder.title) || "";
  const time = (currentReminder && currentReminder.time) || "00:00";

  // console.log(dateForInput);

  const myTitle = useRef();
  const myDate = useRef();
  const myTime = useRef();

  const onClose = () => {
    setReminder(unsetReminderAction());
  };

  const onDelete = () => {
    // remove the reminder
    updateReminderList(deleteReminderAction(currentReminder));
    setReminder(unsetReminderAction());
  };

  const onSuccess = () => {
    // only add id the values are present
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
          1000,
        update: (currentReminder && currentReminder.update) || false
      };

      updateReminderList(addReminderToListAction(reminder));
      setReminder(unsetReminderAction());
    }
  };

  return (
    <div>
      <ActionBar setReminder={setReminder} />
      <Calendar
        reminderList={reminderList}
        createReminderAction={createReminderAction}
        setReminder={setReminder}
      />
      {currentReminder && (
        <Modal onClose={onClose} onDelete={onDelete} onSuccess={onSuccess}>
          <div>
            <div>
              <label htmlFor="title">Title: </label>
              <input
                defaultValue={title}
                ref={myTitle}
                id="title"
                maxLength={25}
                autoFocus
              />
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
              <input defaultValue={time} ref={myTime} type="time" id="time" />
            </div>
          </div>
        </Modal>
      )}
      <pre>{JSON.stringify(reminderList, null, 2)}</pre>
    </div>
  );
};

export { ReamindlyApp };
