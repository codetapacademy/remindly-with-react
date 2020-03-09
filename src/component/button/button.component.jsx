import React from 'react'

const Button = ({ onClick }) => 
  <button 
    onClick={onClick}
    data-testid="awesome-button">
    Hohoho
  </button>


export { Button }