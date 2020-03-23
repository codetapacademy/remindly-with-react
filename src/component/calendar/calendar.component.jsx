import React from 'react'
import moment from 'moment'
import { StyledCalendar, StyledCalendarHead, StyledCalendarCell} from './calendar.style'

const Calendar = () => {
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
        time: firstUnixTime*1000 + n*60*60*24*1000
      }))
      .map(({time}) => ({
        time,
        date: moment(time).format('MMMM Do'),
        month: moment(time).format('MMMM')
      }))

  const displayCalendarHeader = () => weekDays.map( day => (<StyledCalendarHead key={day}>{day}</StyledCalendarHead>))
  
  const displayCalendarBody = () => {
    const currentMonth = moment().format('MMMM')
    return dayList.map( ({date, month}) => (<StyledCalendarCell key={date} inMonth={currentMonth === month}>{date}</StyledCalendarCell>))
  }

  return (
    <StyledCalendar>
      {displayCalendarHeader()}
      {displayCalendarBody()}
    </StyledCalendar>
  )
}

export { Calendar }