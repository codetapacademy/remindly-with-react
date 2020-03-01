import {
  SET_REMINDED_DATE,
  UNSET_REMINDER,
  ADD_REMINDER_TO_LIST
} from "./app.const";

export const createReminderAction = date => ({
  type: SET_REMINDED_DATE,
  date
});

export const addReminderToListAction = reminder => ({
  type: ADD_REMINDER_TO_LIST,
  reminder
});

export const unsetReminderAction = () => ({
  type: UNSET_REMINDER
});
