import { SET_REMINDER_DATE, UNSET_REMINDER, INITIALIZE_REMINDER_LIST, ADD_REMINDER_TO_LIST } from "./app.const"

export const initialReminderValue = null
export const initialReminderList = [
  {
    "title": "2345r",
    "date": "2020-03-27",
    "time": "04:02",
    "unix": 1585281720000
  },
  {
    "title": "2345r3214r",
    "date": "2020-03-27",
    "time": "22:23",
    "unix": 1585347780000
  }
]
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

export const reminderListReducer = (state = [], action) => {
  switch(action.type) {
    case INITIALIZE_REMINDER_LIST:
      return [...action.list]
    case ADD_REMINDER_TO_LIST:
      return [...state, action.reminder]
    default:
      return state
  }
}