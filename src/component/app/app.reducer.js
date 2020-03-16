import {
  SET_REMINDER,
  UNSET_REMINDER,
  INITIALIZE_REMINDER_LIST,
  ADD_REMINDER_TO_LIST,
  DELETE_REMINDER
} from './app.const';

export const initialReminderValue = null;
export const initialReminderList = [
  {
    title: 'Lunch',
    date: '2020-03-09',
    time: '12:00',
    unix: 1583755200000
  },
  {
    title: 'Sleep time',
    date: '2020-03-09',
    time: '22:00',
    unix: 1583791200000
  },
  {
    title: 'HR Meeting',
    date: '2020-03-12',
    time: '15:55',
    unix: 1584028500000
  },
  {
    title: 'Yoga class',
    date: '2020-03-27',
    time: '10:12',
    unix: 1585303920000
  }
].sort((a, b) => a.unix - b.unix);
export const reminderReducer = (state = initialReminderValue, action) => {
  switch (action.type) {
    case SET_REMINDER:
      return {
        ...action.reminder
      };
    case UNSET_REMINDER:
      return initialReminderValue;
    default:
      return state;
  }
};

export const reminderListReducer = (state = [], action) => {
  switch (action.type) {
    case INITIALIZE_REMINDER_LIST:
      return [...action.list].sort((a, b) => a.unix - b.unix);
    case DELETE_REMINDER:
      return state.filter(reminder => reminder.unix !== action.reminder.unix);
    case ADD_REMINDER_TO_LIST:
      // debugger;
      if (action.reminder.update) {
        return state.map(reminder =>
          reminder.unix === action.reminder.unix
            ? { ...action.reminder, update: false }
            : reminder
        );
      }
      // TODO: return the one that is sorted by unix time ascending
      return [...state, action.reminder].sort((a, b) => a.unix - b.unix);
    default:
      return state;
  }
};
