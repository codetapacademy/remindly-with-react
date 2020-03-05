import { SET_REMINDER, UNSET_REMINDER, INITIALIZE_REMINDER_LIST, ADD_REMINDER_TO_LIST, DELETE_REMINDER } from "./app.constants";

export const initialReminderValue = null;
export const reminderReducer = (state = initialReminderValue, action) => {
  switch (action.type) {
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

export const initialReminderList = [
  {
    "title": "Super Awesome Calendar",
    "date": "2019-11-13",
    "time": "00:59",
    "unix": 1573606740000
  },
  {
    "title": "Another reminder",
    "date": "2019-11-14",
    "time": "23:00",
    "unix": 1573772400000
  }
].sort((a,b) => a.unix - b.unix)

export const reminderListReducer = (state = [], action) => {
  switch(action.type) {
    case INITIALIZE_REMINDER_LIST: 
      return [...action.list]
    case DELETE_REMINDER: 
      return state.filter(reminder => reminder.unix !== action.reminder.unix)
    case ADD_REMINDER_TO_LIST: 
    if(action.reminder.update){
      return state.map(reminder => reminder.unix === action.reminder.unix 
        ? ({ ...action.reminder, update: false }) 
        : reminder)
    }
      return [...state, action.reminder]
    default: 
      return state
  }
}