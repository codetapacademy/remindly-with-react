import React from "react";
import { Button } from "../button";

const ActionBar = () => {
  return (
    <div>
      <Button label="Create">
        <span className="remindly-pencil"></span>
      </Button>
      <Button label="Create">
        <span className="remindly-pencil"></span>
      </Button>
      <Button label="Create">
        <span className="remindly-pencil"></span>
      </Button>
    </div>
  );
};

export { ActionBar };
