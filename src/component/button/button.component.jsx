import React from 'react';
import { StyledButton } from './button.style';

const Button = ({ onClick, label, children }) => {
  return (
    <StyledButton onClick={onClick} label={label} data-testid="button">
      {children}
      <span>{label}</span>
    </StyledButton>
  );
};

export { Button };
