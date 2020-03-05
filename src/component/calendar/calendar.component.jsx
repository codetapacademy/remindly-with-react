import React from 'react';
import moment from 'moment';
import { StyledCalendar } from './calendar.style';

const Calendar = () => {
  const weekdays = Array.from({ length: 7 }, (_, k) => k + 1).map(day =>
    moment()
      .weekday(day)
      .format('dddd')
  );

  // const firstDayInMonth = moment()
  //   .locale('en-gb')
  //   .date(1)
  //   .hour(0)
  //   .minute(0)
  //   .second(0);

  const firstDayInCalendar = moment()
    .locale('en-gb')
    .date(1)
    .hour(0)
    .minute(0)
    .second(0)
    .subtract(
      moment()
        .locale('en-gb')
        .date(1)
        .hour(0)
        .minute(0)
        .second(0)
        .weekday(),
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
      date: moment(time).format('MMMM Do YYYY')
    }));

  console.log(dayList);

  const renderCalendarHeader = () => {
    return weekdays.map(day => <div key={day}>{day}</div>);
  };
  const renderCalendarBody = () => {
    return dayList.map(({ date }) => <div key={date}>{date}</div>);
  };

  return (
    <StyledCalendar>
      {renderCalendarHeader()}
      {renderCalendarBody()}
    </StyledCalendar>
  );
};

export { Calendar };
