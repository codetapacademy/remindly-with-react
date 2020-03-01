import {
  SET_REMINDED,
  UNSET_REMINDER,
  ADD_REMINDER_TO_LIST
} from "./app.const";

export const createReminderAction = reminder => ({
  type: SET_REMINDED,
  reminder
});

export const addReminderToListAction = reminder => ({
  type: ADD_REMINDER_TO_LIST,
  reminder
});

export const unsetReminderAction = () => ({
  type: UNSET_REMINDER
});
