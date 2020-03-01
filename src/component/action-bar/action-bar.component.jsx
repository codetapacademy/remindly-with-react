import React from 'react'
import { Button } from '../button'

const ActionBar = () => {
  return (
    <div>
      <Button label="Create">
        <span className="icon-pencil"></span>
      </Button>
      <Button label="Create">
        <span className="icon-pencil"></span>
      </Button>
      <Button label="Create">
        <span className="icon-pencil"></span>
      </Button>
    </div>
  )
}

export { ActionBar }