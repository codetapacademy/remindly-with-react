import React from 'react'
import { Button } from '../button'
import moment from 'moment'
import { StyledActionBar } from './action-bar.style'

const ActionBar = () => {
  const selectedMonth = moment().format('MMMM YYYY')
  return (
    <StyledActionBar>
      <Button label="Create">
        <i className="icon-plus"></i>
      </Button>
      <Button label="Today">
        <i className="icon-calendar"></i>
      </Button>
      <Button label="">
        <i className="icon-backward"></i>
      </Button>
      <Button label="">
        <i className="icon-forward"></i>
      </Button>
      <div>{selectedMonth}</div>
    </StyledActionBar>
  )
}

export { ActionBar }