import { SET_REMINDER_DATE, UNSET_REMINDER } from "./app.const"

export const initialReminderValue = null
export const reminderReducer = (state = initialReminderValue, action) => {
  switch(action.type) {
    case SET_REMINDER_DATE:
      return {
        date: action.date
      }
    case UNSET_REMINDER:
      return initialReminderValue
    default:
      return state
  }
}