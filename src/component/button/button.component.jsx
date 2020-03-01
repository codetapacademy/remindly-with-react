import React from 'react'
import { StyledButton } from './button.style'
const Button = ({ onClick}) => {
  return (
  <button
    onClick={onClick}
    data-testid="nice-button">
    helloagain
      <div className="icon-pencil"></div>
  </button>
  )
}


export { Button }