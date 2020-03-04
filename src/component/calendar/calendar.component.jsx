import React from 'react';
import moment from 'moment';
import { StyledCalendar } from './calendar.style';

const Calendar = () => {
  const weekdays = Array.from({ length: 7 }, (_, k) => k + 1).map(day =>
    moment()
      .weekday(day)
      .format('dddd')
  );
  console.log(weekdays);

  const renderCalendarHeader = () => {
    return weekdays.map(day => <div>{day}</div>);
  };

  return <StyledCalendar>{renderCalendarHeader()}</StyledCalendar>;
};

export { Calendar };
