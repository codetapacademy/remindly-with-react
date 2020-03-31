import { SET_REMINDER, UNSET_REMINDER, INITIALIZE_REMINDER_LIST, ADD_REMINDER_TO_LIST } from "./app.const"

export const initialReminderValue = null
export const initialReminderList = [
  {
    "title": "Mega meeting",
    "date": "2020-04-03",
    "time": "13:02",
    "unix": 1585915320000
  },
  {
    "title": "Let's meet",
    "date": "2020-05-03",
    "time": "21:03",
    "unix": 1588536180000
  },
  {
    "title": "5000 people Meeting",
    "date": "2020-03-27",
    "time": "04:02",
    "unix": 1585281720000
  },
  {
    "title": "Awesome meeting later",
    "date": "2020-03-27",
    "time": "22:23",
    "unix": 1585347780000
  }
].sort((a, b) => a.unix - b.unix)
export const reminderReducer = (state = initialReminderValue, action) => {
  switch(action.type) {
    case SET_REMINDER:
      return {
        ...action.reminder
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
      return [...state, action.reminder].sort((a, b) => a.unix - b.unix)
    default:
      return state
  }
}