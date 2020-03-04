import React from 'react';
import { Button } from '../button';
import moment from 'moment';
import { StyledActionBar } from './action-bar.style';

const ActionBar = () => {
  const selectedMonth = moment().format('MMMM YYYY');

  return (
    <StyledActionBar>
      <Button label="Create">
        <i className="remindly-plus"></i>
      </Button>
      <Button label="Today">
        <i className="remindly-calendar"></i>
      </Button>
      <Button label="">
        <i className="remindly-circle-left"></i>
      </Button>
      <Button label="">
        <i className="remindly-circle-right"></i>
      </Button>
      <div>{selectedMonth}</div>
    </StyledActionBar>
  );
};

export { ActionBar };
