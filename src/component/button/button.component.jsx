import React from "react";
import { StyledButton } from "./button.style";

const Button = ({ onClick, label = "hi", children }) => {
  return (
    <StyledButton onClick={onClick} data-testid="nice-button">
      {children} <span>{label}</span>
    </StyledButton>
  );
};

export { Button };
