import React from 'react';
import { Button } from '../button'
import moment from 'moment'
import { StyledActionBar } from './action-bar.style';
import { createReminderAction } from '../app/app.action';

const Actionbar = ({ setReminder }) => {
  const selectMonth = moment()
  return (
    <StyledActionBar>
      <Button 
        label="Create"
        onClick={() => setReminder(createReminderAction(selectMonth.unix()))}>
        <i className="remind-plus"></i>
      </Button>
      <Button label="Today">
        <i className="remind-calendar"></i>
      </Button>
      <Button>
        <i className="remind-arrow-left"></i>
      </Button>
      <Button>
        <i className="remind-arrow-right"></i>
      </Button>
      <div>{selectMonth.format('MMMM YYYY')}</div>
    </StyledActionBar>
  )
}

export { Actionbar }