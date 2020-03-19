import React from 'react'
import moment from 'moment'
import { StyledCalendar } from './calendar.style'

const Calendar = () => {
  const weekDays = Array.from({length: 7}, (_, key) => key + 1).map(n => moment().weekday(n).format('dddd'))
  console.log(weekDays)

const displayCalendarHeader = () => weekDays.map( day => (<div>{day}</div>))

  return (
    <StyledCalendar>
      {displayCalendarHeader()}
    </StyledCalendar>
  )
}

export { Calendar }