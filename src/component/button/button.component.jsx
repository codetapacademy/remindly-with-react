import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} data-testid="button">
      Create
      <div className="remindly-pencil2"></div>
    </button>
  );
};

export { Button };
