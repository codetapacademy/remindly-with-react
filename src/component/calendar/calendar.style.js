import styled from 'styled-components'

export const StyledCalendarHead = styled.div `
  padding: 1rem 0;
  text-align: center;
  border: 1px solid grey;
  background-color: lightgoldenrodyellow;
`

export const StyledCalendarReminder = styled.div `
  font-size: 10px;
  border-radius: 10px;
  border-bottom: 1px solid lightseagreen;
  padding: 2px 4px;
  margin: 5px 0;
`

export const StyledCalendarReminderWrapperList = styled.div `
  display: grid;
`

export const StyledCalendarCell = styled.div `
  padding: 1rem 0;
  text-align: center;
  cursor: pointer;
  background-color: ${({ inMonth }) => inMonth ? 'lightblue' : 'lightsalmon'};
`

export const StyledCalendar = styled.div `
  display: grid;
  grid-gap: 10px;
  margin: 1.5rem;
  grid-template-columns: repeat(7, 1fr);
`
