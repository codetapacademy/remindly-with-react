import styled from 'styled-components';

export const StyledCalendarHeader = styled.div`
  padding: 1rem 0;
  text-align: center;
  border: 1px solid lightblue;
  background-color: lightcoral;
`
export const StyledCalendarReminder = styled.div`
  font-size: 10px;
  border-bottom: 1px solid red;
  padding: 1px 2px;
  cursor: pointer;
  &:last-child {
    border: 0;
  }
`

export const StyledCalendarReminderList = styled.div`
  display: grid;
  border-radius: 5px;
  border: ${({ reminderListLengthIsZero }) => reminderListLengthIsZero ? 'none;' : '1px solid red;'};
  margin: 2px;
`

export const StyledCalendarCell = styled.div`
  padding: 1rem 0;
  text-align: center;
  cursor: pointer;
  background-color: ${({ inMonth }) => inMonth ? 'lightblue' : 'lightgrey'}
`

export const StyledCalendar = styled.div`
  display: grid;
  grid-gap: 5px;
  margin: 2rem;
  grid-template-columns: repeat(7, 1fr);
`