import React from 'react'
import moment from 'moment'
import { StyledCalendar, StyledCalendarHead, StyledCalendarCell, StyledCalendarReminder, StyledCalendarReminderWrapperList } from './calendar.style'

const Calendar = ({ reminderList }) => {
  const dayInMiliseconds = 60*60*24*1000
  const weekDays = Array.from({length: 7}, (_, key) => key + 1)
    .map(n => moment().weekday(n).format('dddd'))

  const firstDayInMonth = moment()
    .locale('en-gb')
    .date(1)
    .hour(0)
    .minute(0)
    .second(0)
  const firstDayInCalendar = firstDayInMonth
    .subtract(
      firstDayInMonth.weekday() - 1,
      'd'
    )

    const firstUnixTime = firstDayInCalendar.unix()
    const dayList = Array
      .from({length: 35}, (_, key) => key)
      .map (n => ({
        unix: firstUnixTime * 1000 + n * dayInMiliseconds
      }))
      .map(({ unix }) => ({
        unix,
        date: moment(unix).format('MMMM Do'),
        month: moment(unix).format('MMMM')
      }))

  const displayCalendarHeader = () => weekDays.map( day => (<StyledCalendarHead key={day}>{day}</StyledCalendarHead>))
  
  const displayCalendarBody = () => {
    const currentMonth = moment().format('MMMM')
    return dayList.map( ({ date, month, unix }) => {
      console.log(unix, date)
      const reminderToShowList = reminderList.filter(reminder => {
        return reminder.unix > unix && reminder.unix < unix + dayInMiliseconds
      })
      return (
      <StyledCalendarCell 
        key={date} 
        inMonth={currentMonth === month}
        >
          {date}
          {reminderToShowList.length && <StyledCalendarReminderWrapperList>
            {reminderToShowList.map(({ title, date, time, unix}) => {
              return (
                <StyledCalendarReminder>{title}</StyledCalendarReminder>
              )
            })}
          </StyledCalendarReminderWrapperList>}
        </StyledCalendarCell>)}
    )}

  return (
    <StyledCalendar>
      {displayCalendarHeader()}
      {displayCalendarBody()}
    </StyledCalendar>
  )
}

export { Calendar }