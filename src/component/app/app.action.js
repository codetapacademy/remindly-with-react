import {
  SET_REMINDER,
  UNSET_REMINDER,
  ADD_REMINDER_TO_LIST,
  DELETE_REMINDER
} from './app.const';

export const createReminderAction = reminder => ({
  type: SET_REMINDER,
  reminder
});

export const deleteReminderAction = reminder => ({
  type: DELETE_REMINDER,
  reminder
});

export const unsetReminderAction = () => ({
  type: UNSET_REMINDER
});

export const addReminderToListAction = reminder => ({
  type: ADD_REMINDER_TO_LIST,
  reminder
});
