import React, { useReducer } from 'react';
import { ActionBar } from '../action-bar';
import { Calendar } from '../calendar';
import { Modal } from '../modal';
import { initialReminderValue, reminderReducer } from './app.reducer';

const RecallApp = () => {
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

export { RecallApp };
