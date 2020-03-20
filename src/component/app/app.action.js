import { SET_REMINDER_DATE } from "./app.const";

export const createReminderAction = date => ({
  type: SET_REMINDER_DATE,
  date
})
