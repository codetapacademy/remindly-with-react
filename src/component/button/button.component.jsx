import React from "react";

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} data-testid="nice-button">
      h1
    </button>
  );
};

export { Button };
