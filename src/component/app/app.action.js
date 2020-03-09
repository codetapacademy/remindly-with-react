import {
  SET_REMINDER_DATE,
  UNSET_REMINDER,
  ADD_REMINDER_TO_LIST
} from './app.const';

export const createReminderAction = date => ({
  type: SET_REMINDER_DATE,
  date
});

export const unsetReminderAction = () => ({
  type: UNSET_REMINDER
});

export const addReminderToListAction = reminder => ({
  type: ADD_REMINDER_TO_LIST,
  reminder
});
