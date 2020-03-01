import {
  SET_REMINDED,
  UNSET_REMINDER,
  ADD_REMINDER_TO_LIST,
  DELETE_REMINDED
} from "./app.const";

export const createReminderAction = reminder => ({
  type: SET_REMINDED,
  reminder
});

export const deleteReminderAction = reminder => ({
  type: DELETE_REMINDED,
  reminder
});

export const addReminderToListAction = reminder => ({
  type: ADD_REMINDER_TO_LIST,
  reminder
});

export const unsetReminderAction = () => ({
  type: UNSET_REMINDER
});
