import React, { useReducer } from "react";
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

  const onClose = () => {
    setReminder(unsetReminderAction());
  };

  const dateForInput = moment(
    ((currentReminder && currentReminder.date) || 0) * 1000
  ).format("YYYY-MM-DD");
  console.log(dateForInput);
  return (
    <div>
      <ActionBar setReminder={setReminder} />
      <Calendar />
      {currentReminder && (
        <Modal onClose={onClose}>
          <div>
            <div>
              <label htmlFor="date">Date: </label>
              <input
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
                value={"00:00:00"}
                onChange={() => {}}
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export { ReamindlyApp };
