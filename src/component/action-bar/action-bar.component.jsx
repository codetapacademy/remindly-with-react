import React from 'react';
import { Button } from '../button';

const ActionBar = () => {
  return (
    <div>
      <Button label="Create">
        <span className="remindly-pencil2"></span>
      </Button>
    </div>
  );
};

export { ActionBar };
