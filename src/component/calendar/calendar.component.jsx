import React from "react";
import moment from "moment";
import { StyledCalendar } from "./calendar.style";

const Calendar = () => {
  const weekDays = Array.from({ length: 7 }, (_, k) => k + 1).map(n =>
    moment()
      .weekday(n)
      .format("dddd")
  );
  const renderCalendarHeader = () => {
    return weekDays.map(day => <div>{day}</div>);
  };
  console.log(weekDays);
  return <StyledCalendar>{renderCalendarHeader()}</StyledCalendar>;
};

export { Calendar };
