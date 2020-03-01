import {
  SET_REMINDED_DATE,
  UNSET_REMINDER,
  INITIALIZE_REMINDER_LIST,
  ADD_REMINDER_TO_LIST
} from "./app.const";

export const initialReminderValue = null;
export const initialReminderList = [
  {
    title: "first",
    date: "2020-03-01",
    time: "16:55",
    unix: 1583081700000
  },
  {
    title: "second",
    date: "2020-03-02",
    time: "17:55",
    unix: 1583171700000
  },
  {
    title: "third",
    date: "2020-03-03",
    time: "18:00",
    unix: 1583258400000
  },
  {
    title: "Fourth",
    date: "2020-03-04",
    time: "19:00",
    unix: 1583348400000
  }
];
export const reminderReducer = (state = initialReminderValue, action) => {
  switch (action.type) {
    case SET_REMINDED_DATE:
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
      // TODO, return the one that is sorted by unix time ascendent
      return [...state, action.reminder];
    default:
      return state;
  }
};
