import React from 'react'
import moment from 'moment'
import { StyledCalendar } from './calendar.style'

const Calendar = () => {
  const weekDays = Array.from({length: 7}, (_, key) => key + 1).map(n => moment().weekday(n).format('dddd'))
  console.log(weekDays)

  const firstDayInMonth = moment()
    .date(0)
    .hour(0)
    .minute(0)
    .second(0)
  const firstDayInCalendar = firstDayInMonth
    .subtract(
      firstDayInMonth.day(),
      'd'
      )

  console.log(firstDayInCalendar)

  const displayCalendarHeader = () => weekDays.map( day => (<div key={day}>{day}</div>))

  return (
    <StyledCalendar>
      {displayCalendarHeader()}
    </StyledCalendar>
  )
}

export { Calendar }