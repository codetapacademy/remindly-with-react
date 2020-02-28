import React from "react";
import { Button } from "../button";
import moment from "moment";
import { StyledActionBar } from "./action-bar.style";
import { createReminderAction } from "../app/app.action";

const ActionBar = ({ setReminder }) => {
  const selectedMonth = moment();
  return (
    <StyledActionBar>
      <Button
        label="Create"
        onClick={() =>
          setReminder(
            createReminderAction(createReminderAction(selectedMonth.unix()))
          )
        }
      >
        <i className="remindly-plus"></i>
      </Button>
      <Button label="Today">
        <i className="remindly-calendar"></i>
      </Button>
      <Button label="">
        <i className="remindly-backward"></i>
      </Button>
      <Button label="">
        <i className="remindly-forward"></i>
      </Button>
      <div>{selectedMonth.format("MMMM YYYY")}</div>
    </StyledActionBar>
  );
};

export { ActionBar };
