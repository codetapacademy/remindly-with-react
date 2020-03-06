import React from 'react';
import moment from 'moment';
import {
  StyledCalendar,
  StyledCalendarHead,
  StyledCalendarCell
} from './calendar.style';

const Calendar = () => {
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
      time: firstUnixTime * 1000 + n * 60 * 60 * 24 * 1000
    }))
    .map(({ time }) => ({
      time,
      date: moment(time).format('MMM Do'),
      month: moment(time).format('MMM')
    }));

  // console.log(dayList);

  const renderCalendarHeader = () => {
    return weekdays.map(day => (
      <StyledCalendarHead key={day}>{day}</StyledCalendarHead>
    ));
  };
  const renderCalendarBody = () => {
    const currentMonth = moment().format('MMM');
    return dayList.map(({ date, month }) => (
      <StyledCalendarCell key={date} inMonth={currentMonth === month}>
        {date}
      </StyledCalendarCell>
    ));
  };

  return (
    <StyledCalendar>
      {renderCalendarHeader()}
      {renderCalendarBody()}
    </StyledCalendar>
  );
};

export { Calendar };
