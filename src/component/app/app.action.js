import { SET_REMINDER_DATE, UNSET_REMINDER } from './app.const';

export const createReminderAction = date => ({
  type: SET_REMINDER_DATE,
  date
});

export const unsetReminderAction = () => ({
  type: UNSET_REMINDER
});
