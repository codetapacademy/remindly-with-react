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
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::after {
    color: #002666;
    background-color: white;
    content: '${({ label }) => label}';
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.10s;
  }

  &:hover::after {
    ${({ label }) => label ? 'top: 0' : ''}
    /* ; */
  }

  & > span:last-child {
    padding-left: 10px;
  }

  & > span:empty {
    display: none;
  }
  `