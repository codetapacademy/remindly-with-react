import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0 ${({ label }) => (label ? "24px" : "20px")};
  border-radius: 20px;
  height: 40px;
  line-height: 40px;
  justify-self: center;
  border: 0;
  background-color: rgb(92, 32, 213);
  color: white;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  & > div {
  ${({ label }) => {
    if (!label) {
      return `
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      `;
    }
  }}
  }

  &::after {
    content: "${({ label }) => label}";
    position: absolute;
    top: 40px;
    left:0;
    width: 100%;
    height: 100%;
    background-color: white;
    color: rgb(92, 32, 213);
    transition: 100ms;
  }

  &:hover::after {
    ${({ label }) => (label ? "top: 0;" : "")}
    
  }

  & > span:last-child {
    padding-left: 8px;
  }
  & > span:empty {
    display: none;
  }
`;
