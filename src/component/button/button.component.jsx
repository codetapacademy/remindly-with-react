import React from 'react'

const Button = ({ onClick }) => 
  <button 
    onClick={onClick}
    data-testid="awesome-button">
    Hohoho
    <div className="remind-arrow-left"></div>
    <div className="remind-arrow-right"></div>
  </button>


export { Button }