import React from 'react';
import moment from 'moment';
import {
  StyledCalendar,
  StyledCalendarHead,
  StyledCalendarCell,
  StyledCalendarReminder,
  StyledCalendarReminderList
} from './calendar.style';

const Calendar = ({ reminderList }) => {
  const dayInMilliseconds = 60 * 60 * 24 * 1000;
  const weekdays = Array.from({ length: 7 }, (_, k) => k + 1).map(day =>
    moment()
      .weekday(day)
      .format('dddd')
  );

  const firstDayInMonth = moment()
    .locale('en-gb')
    .date(1)
    .hour(0)
    .minute(0)
    .second(0);

  const firstDayInCalendar = firstDayInMonth.subtract(
    firstDayInMonth.weekday() - 1,
    'd'
  );

  // .format();

  const firstUnixTime = firstDayInCalendar.unix();
  // console.log(firstDayInCalendar);
  const dayList = Array.from({ length: 35 }, (_, k) => k)
    .map(n => ({
      unix: firstUnixTime * 1000 + n * dayInMilliseconds
    }))
    .map(({ unix }) => ({
      unix,
      date: moment(unix).format('MMM Do'),
      month: moment(unix).format('MMM')
    }));

  // console.log(dayList);

  const renderCalendarHeader = () => {
    return weekdays.map(day => (
      <StyledCalendarHead key={day}>{day}</StyledCalendarHead>
    ));
  };
  const renderCalendarBody = () => {
    const currentMonth = moment().format('MMM');
    return dayList.map(({ date, month, unix }) => {
      console.log(unix, date);
      const reminderToShowList = reminderList.filter(reminder => {
        return reminder.unix > unix && reminder.unix < unix + dayInMilliseconds;
      });
      console.log();
      return (
        <StyledCalendarCell key={date} inMonth={currentMonth === month}>
          {date}
          {reminderToShowList.length && (
            <StyledCalendarReminderList>
              {reminderToShowList.map(({ title, date, time, unix }) => {
                return <StyledCalendarReminder>{title}</StyledCalendarReminder>;
              })}
            </StyledCalendarReminderList>
          )}
        </StyledCalendarCell>
      );
    });
  };

  return (
    <StyledCalendar>
      {renderCalendarHeader()}
      {renderCalendarBody()}
    </StyledCalendar>
  );
};

export { Calendar };
