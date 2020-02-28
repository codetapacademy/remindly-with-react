import React, { useReducer } from "react";
import { ActionBar } from "../action-bar";
import { Calendar } from "../calendar";
import { Modal } from "../modal/modal.component";
import { act } from "react-dom/test-utils";
import { initialReminderValue, reminderReducer } from "./app.reducer";

const ReamindlyApp = () => {
  const [currentReminder, setReminder] = useReducer(
    reminderReducer,
    initialReminderValue
  );
  return (
    <div>
      <ActionBar setReminder={setReminder} />
      <Calendar />
      {currentReminder && <Modal />}
    </div>
  );
};

export { ReamindlyApp };
