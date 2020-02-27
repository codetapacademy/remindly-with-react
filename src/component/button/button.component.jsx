import React from "react";

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} data-testid="nice-button">
      h1
      <div className="remindly-pencil"></div>
    </button>
  );
};

export { Button };
