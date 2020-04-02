import React from 'react'
import { StyledModalWrapper, StyledModalBody, StyledModalHeader, StyledModal  } from './modal.style'
import { Button } from '../button'

const Modal = ({ children, onClose, onEdit, onDelete, onSuccess }) => {
  return (
    <StyledModalWrapper>
      <StyledModal>
        <StyledModalHeader>
          <Button onClick={onEdit} label="">
            <i className="remind-pencil"></i>
          </Button>
          <Button onClick={onDelete} label="">
            <i className="remind-bin"></i>
          </Button>
          <Button onClick={onClose} label="">
            <i className="remind-cross"></i>
          </Button>
        </StyledModalHeader>
        <StyledModalBody>
          {children}
        </StyledModalBody>
          <div>
            <Button onClick={onSuccess} label="Save">
              <i className="remind-saver"></i>
            </Button>
          </div>
      </StyledModal>
    </StyledModalWrapper>
  )
}

export { Modal }