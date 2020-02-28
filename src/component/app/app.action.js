import { SET_REMINDED_DATE, UNSET_REMINDER } from "./app.const";

export const createReminderAction = date => ({
  type: SET_REMINDED_DATE,
  date
});

export const unsetReminderAction = () => ({
  type: UNSET_REMINDER
});
