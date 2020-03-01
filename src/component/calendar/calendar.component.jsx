import React from "react";
import moment from "moment";
import {
  StyledCalendar,
  StyledCalendarHeader,
  StyledCalendarCell,
  StyledCalendarReminder,
  StyledCalendarReminderList
} from "./calendar.style";

const Calendar = ({ reminderList, setReminder, createReminderAction }) => {
  const dayInMilliseconds = 60 * 60 * 24 * 1000;
  const weekDays = Array.from({ length: 7 }, (_, k) => k + 1).map(n =>
    moment()
      .weekday(n)
      .format("dddd")
  );

  const firstDayInMonth = moment()
    .locale("en-gb")
    .date(1)
    .hour(0)
    .minute(0)
    .second(0);
  const firstDayInCalendar = firstDayInMonth.subtract(
    firstDayInMonth.weekday() - 1,
    "d"
  );

  // .format();

  const firstUnixTime = firstDayInCalendar.unix();

  const dayList = Array.from({ length: 35 }, (_, k) => k)
    .map(n => ({
      unix: firstUnixTime * 1000 + n * dayInMilliseconds
    }))
    .map(({ unix }) => ({
      unix,
      date: moment(unix).format("MMM Do "),
      month: moment(unix).format("MMM")
    }));

  const renderCalendarHeader = () => {
    return weekDays.map(day => (
      <StyledCalendarHeader key={day}>{day}</StyledCalendarHeader>
    ));
  };
  const renderCalendarBody = () => {
    const currentMonth = moment().format("MMM");
    return dayList.map(({ date, month, unix }) => {
      const reminderToShowList = reminderList.filter(reminder => {
        return (
          reminder.unix >= unix && reminder.unix < unix + dayInMilliseconds
        );
      });
      return (
        <StyledCalendarCell key={date} inMonth={currentMonth === month}>
          {date}
          {reminderToShowList.length && (
            <StyledCalendarReminderList>
              {reminderToShowList.map(({ title, date, time, unix }) => {
                const handleReminder = () => {
                  setReminder(
                    createReminderAction({
                      title,
                      date,
                      time,
                      unix,
                      update: true
                    })
                  );
                };
                return (
                  <StyledCalendarReminder key={unix} onClick={handleReminder}>
                    {title}
                  </StyledCalendarReminder>
                );
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
