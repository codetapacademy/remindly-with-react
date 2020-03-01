import styled from "styled-components";

export const StyledCalendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 10px;
  margin: 2rem;
`;

export const StyledCalendarHeader = styled.div`
  padding: 1rem 0;
  text-align: center;
  border: 1px solid lightblue;
  background: lightgreen;
`;

export const StyledCalendarReminder = styled.div`
  font-size: 10px;
  border-bottom: 1px solid darkgreen;
  padding: 1px 2px;
  cursor: pointer;

  &:last-child {
    border: 0;
  }
`;

export const StyledCalendarReminderList = styled.div`
  display: grid;
  border-radius: 5px;
  border: 1px solid darkgreen;
  margin: 2px;
`;

export const StyledCalendarCell = styled.div`
  padding: 1rem 0;
  text-align: center;
  cursor: pointer;
  border: 1px solid lightblue;
  background-color: ${({ inMonth }) => (inMonth ? "lightblue" : "lightgray")};
`;
