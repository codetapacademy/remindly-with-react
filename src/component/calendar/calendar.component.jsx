import React from 'react'
import moment from 'moment'
import { StyledCalendar } from './calendar.style'

const Calendar = () => {
  const weekDays = Array.from({length: 7}, (_, key) => key + 1).map(n => moment().weekday(n).format('dddd'))
  console.log(weekDays)

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
    )

    const firstUnixTime = firstDayInCalendar.unix()
    const dayList = Array
      .from({length: 35}, (_, key) => key)
      .map (n => ({
        time: firstUnixTime*1000 + n*60*60*24*1000
      }))
      .map(({time}) => ({
        time,
        date: moment(time).format('MMMM Do YYYY')
      }))

  console.log(dayList)

  const displayCalendarHeader = () => weekDays.map( day => (<div key={day}>{day}</div>))
  
  const displayCalendarBody = () => dayList.map( ({date}) => (<div key={date}>{date}</div>))

  return (
    <StyledCalendar>
      {displayCalendarHeader()}
      {displayCalendarBody()}
    </StyledCalendar>
  )
}

export { Calendar }