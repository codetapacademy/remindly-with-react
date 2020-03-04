import styled from 'styled-components'

export const StyledCalendarHead = styled.div`
  padding: 1rem 0;
  text-align: center;
  border: 1px solid purple;
  background-color: lightcoral;
`

export const StyledCalendarCell = styled.div`
  padding: 1rem 0;
  text-align: center;
  background-color: ${({ inMonth }) => inMonth ? 'green' : 'lightblue'}
`

export const StyledCalendar = styled.div`
  display: grid;
  grid-gap: 5px;
  margin: 2rem;
  grid-template-columns: repeat(7, 1fr);
`