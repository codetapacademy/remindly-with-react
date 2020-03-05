import React from 'react';
import { Button } from '../button';
import moment from 'moment'
import { StyledActionBar } from './action-bar.style';
import { createReminderAction } from '../app/app.actions';

const ActionBar = ({ setReminder }) => {

  return (
    <StyledActionBar>
      <Button 
        label="Create"
        onClick={() => setReminder(createReminderAction({ date: moment().unix()}))}
      >
        <i className="icon-plus"></i>
      </Button>
      <Button label="Today" >
        <i className="icon-calendar"></i>
      </Button>
      <Button label="" >
        <i className="icon-backward"></i>
      </Button>
      <Button label="" >
        <i className="icon-forward"></i>
      </Button>
      <div>{moment().format('MMMM YYYY')}</div>
    </StyledActionBar>
  )
}

export { ActionBar }