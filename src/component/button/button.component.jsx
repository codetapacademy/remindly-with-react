import React from 'react'
import { StyledButton } from './button.style'

const Button = ({ onClick, label, children }) => 
  <StyledButton 
    onClick={onClick}
    data-testid="awesome-button">
    <span>{label}</span>
    {children}
  </StyledButton>

export { Button }