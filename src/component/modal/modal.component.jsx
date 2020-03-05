import React from 'react'
import { StyledModal, StyledModalWrapper, StyledModalBody, StyledModalHeader } from './modal.style';
import { Button } from '../button'

const Modal = ({ children, onEdit, onDelete, onClose, onSuccess }) => {
  return (
    <StyledModalWrapper>
      <StyledModal>
        <StyledModalHeader>
          <Button onClick={onEdit} label="">
            <div className="icon-pencil"></div>
          </Button>
          <Button onClick={onDelete} label="">
            <div className="icon-bin"></div>
          </Button>
          <Button onClick={onClose} label="">
            <div className="icon-cross"></div>
          </Button>
        </StyledModalHeader>
        <StyledModalBody>
          {children}
        </StyledModalBody>
        <div>
          <Button onClick={onSuccess} label="Save">
            <i className="icon-save"></i>
          </Button>
        </div>
      </StyledModal>
    </StyledModalWrapper>
  )
}

export { Modal }