import {
  SET_REMINDER_DATE,
  UNSET_REMINDER,
  INITIALIZE_REMINDER_LIST,
  ADD_REMINDER_TO_LIST
} from './app.const';

export const initialReminderValue = null;
export const initialReminderList = [
  {
    title: 'Mananca',
    date: '2020-03-09',
    time: '12:00',
    unix: 1583755200000
  },
  {
    title: 'Dormi',
    date: '2020-03-09',
    time: '22:00',
    unix: 1583791200000
  },
  {
    title: 'Batem palma',
    date: '2020-03-12',
    time: '15:55',
    unix: 1584028500000
  },
  {
    title: 'Plata facturi',
    date: '2020-03-27',
    time: '10:12',
    unix: 1585303920000
  }
];
export const reminderReducer = (state = initialReminderValue, action) => {
  switch (action.type) {
    case SET_REMINDER_DATE:
      return {
        date: action.date
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
      return [...action.list];
    case ADD_REMINDER_TO_LIST:
      // TODO, return the one that is sorted by unix time ascendant
      return [...state, action.reminder];
    default:
      return state;
  }
};
