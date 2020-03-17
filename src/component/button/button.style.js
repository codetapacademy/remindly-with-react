import styled from 'styled-components'

export const StyledButton = styled.button `
  padding: 10px 20px;

  & > span:first-child {
    padding: 10px;
  }

  & > span:empty {
    display: none;
  }
  `