import React from 'react';
import { Button } from '../button'
import moment from 'moment'
import { StyledActionBar } from './action-bar.style';

const selectMonth = moment().format('MMMM YYYY')
const Actionbar = () => {
  return (
    <StyledActionBar>
      <Button label="Create">
        <i className="remind-pencil"></i>
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
      <div>{selectMonth}</div>
    </StyledActionBar>
  )
}

export { Actionbar }