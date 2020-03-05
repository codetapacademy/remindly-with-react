import React from 'react';
import moment from 'moment';
import { StyledCalendar, StyledCalendarHeader, StyledCalendarCell, StyledCalendarReminder, StyledCalendarReminderList } from './calendar.style';

const Calendar = ({ reminderList, setReminder, createReminderAction }) => {
  const dayInMilliseconds = 1000 + 60 * 60 * 24 * 1000;

  const weekdays = Array
  .from({ length: 7 }, (_,key) => key + 1)
  .map(n => moment().weekday(n).format('dddd'))
  
  const renderCalendarHeader = () => {
    return weekdays.map(day => (
      <StyledCalendarHeader key={day}>{day}</StyledCalendarHeader>
    ))
  }

  const renderCalendarBody = () => {
    const currentMonth = moment().format('MMM');

    return dayList.map(({ date, month, unix }) => {

      const reminderToShowList = reminderList.filter(reminder => {
        return reminder.unix >= unix && reminder.unix < unix + dayInMilliseconds
      });

      return (
        <StyledCalendarCell 
          key={date} 
          inMonth={currentMonth === month}
        >
            {date}
          {reminderToShowList && <StyledCalendarReminderList reminderListLengthIsZero={reminderToShowList.length === 0}>
              {reminderToShowList.map(({ title, date, time, unix }) => {
                const handleReminder = () => {
                  setReminder(createReminderAction({
                    title,
                    date,
                    time,
                    unix,
                    update: true,
                  }))
                }
                return (
                  <StyledCalendarReminder 
                    onClick={handleReminder}
                    key={unix}>{title}</StyledCalendarReminder>
                )
              })}
            </StyledCalendarReminderList>}
        </StyledCalendarCell>
      )
    })
  }

  const firstDayInMonth = moment()
    .locale('en-gb')
    .date(1)
    .hour(0)
    .minute(0)
    .second(0);

  const firstDayInCalendar = firstDayInMonth
    .subtract(
      firstDayInMonth.weekday() - 1,
        'd'
    )
  
  const firstUnixTime = firstDayInCalendar.unix();

  const dayList = Array
    .from({length: 35}, (_,key) => key)
    .map(n => ({
      unix: firstUnixTime * 1000 + n * dayInMilliseconds
    }))
    .map(({ unix }) => ({
      unix,
      date: moment(unix).format('MMM Do'),
      month: moment(unix).format('MMM')
    }))

  return (
    <StyledCalendar>
      {renderCalendarHeader()}
      {renderCalendarBody()}
    </StyledCalendar>
  )
}

export { Calendar }