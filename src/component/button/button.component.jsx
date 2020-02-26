import React from 'react';
import { StyledButton } from './button.style';

const Button = ({ onClick, label = 'Create', children }) => {
  return (
    <StyledButton onClick={onClick} data-testid="button">
      <span>{label}</span>
      {children}
    </StyledButton>
  );
};

export { Button };
