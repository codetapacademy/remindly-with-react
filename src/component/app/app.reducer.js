import { SET_REMINDED_DATE } from "./app.const";

export const initialReminderValue = null;
export const reminderReducer = (state = initialReminderValue, action) => {
  switch (action.type) {
    case SET_REMINDED_DATE:
      return {
        date: action.date
      };
    default:
      return state;
  }
};
