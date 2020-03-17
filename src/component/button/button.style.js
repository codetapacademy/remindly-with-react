import styled from 'styled-components'

export const StyledButton = styled.button `
  padding: 0 24px;
  border-radius: 20px;
  height: 40px;
  line-height: 40px;
  border: 0;
  justify-self: center;
  background-color: #002666;
  color: white;

  & > span:last-child {
    padding-left: 10px;
  }

  & > span:empty {
    display: none;
  }
  `