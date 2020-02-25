import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} data-testId="button">
      Create
    </button>
  );
};

export { Button };
