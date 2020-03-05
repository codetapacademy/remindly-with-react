import React from 'react';
import { StyledButton } from './button.style';

const Button = ({ onClick, label = 'hey', children }) => {
  return (
    <StyledButton 
      label={label}
      onClick={onClick}
      data-testid='nice-button'
    >
      {children}
      <span>{label}</span>
    </StyledButton>
  )
}

export { Button }