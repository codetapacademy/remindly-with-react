import { SET_REMINDER_DATE } from './app.const';

export const initialReminderValue = null;
export const reminderReducer = (state = initialReminderValue, action) => {
  switch (action.type) {
    case SET_REMINDER_DATE:
      return {
        date: action.date
      };
    default:
      return state;
  }
};
