import React from "react";
import moment from "moment";
import { StyledCalendar } from "./calendar.style";

const Calendar = () => {
  const weekDays = Array.from({ length: 7 }, (_, k) => k + 1).map(n =>
    moment()
      .weekday(n)
      .format("dddd")
  );

  const firstDayInMonth = moment()
    .date(0)
    .hour(0)
    .minute(0)
    .second(0);
  const firstDayInCalendar = firstDayInMonth.subtract(
    firstDayInMonth.weekday(),
    "d"
  );
  // .format();
  console.log(firstDayInCalendar);

  const renderCalendarHeader = () => {
    return weekDays.map(day => <div key={day}>{day}</div>);
  };
  console.log(weekDays);
  return <StyledCalendar>{renderCalendarHeader()}</StyledCalendar>;
};

export { Calendar };
