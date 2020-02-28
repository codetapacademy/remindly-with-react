import { SET_REMINDED_DATE } from "./app.const";

export const createReminderAction = date => ({
  type: SET_REMINDED_DATE,
  date
});
