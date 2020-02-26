import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 8px 16px;

  & > span:first-child {
    padding-right: 8px;
  }

  & > span:empty {
    display: none;
  }
`;
