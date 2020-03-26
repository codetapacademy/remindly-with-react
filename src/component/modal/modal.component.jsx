import React from 'react'
import { StyledModalWrapper, StyledModalBody, StyledModalHeader, StyledModal  } from './modal.style'
import { Button } from '../button'

const Modal = ({ children, onClose, onEdit, onDelete, onSuccess, onCancel }) => {
  return (
    <StyledModalWrapper>
      <StyledModal>
        <StyledModalHeader>
          <Button onClick={onEdit}>
            <div className="remind-pencil"></div>
          </Button>
          <Button onClick={onDelete}>
            <div className="remind-bin"></div>
          </Button>
          <Button onClick={onClose}>
            <div className="remind-cross"></div>
          </Button>
        </StyledModalHeader>
        <StyledModalBody>
          {children}
        </StyledModalBody>
      </StyledModal>
    </StyledModalWrapper>
  )
}

export { Modal }