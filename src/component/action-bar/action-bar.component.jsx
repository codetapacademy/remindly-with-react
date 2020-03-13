import React from 'react';
import { Button } from '../button'

const Actionbar = () => {
  return (
    <div>
      <Button label="Create">
        <span className="remind-arrow-left"></span>
        <span className="remind-arrow-right"></span>
      </Button>
      <Button label="Create">
        <span className="remind-arrow-left"></span>
        <span className="remind-arrow-right"></span>
      </Button>
      <Button label="Create">
        <span className="remind-arrow-left"></span>
        <span className="remind-arrow-right"></span>
      </Button>
      <Button label="Create">
        <span className="remind-arrow-left"></span>
        <span className="remind-arrow-right"></span>
      </Button>
    </div>
  )
}

export { Actionbar }