import React from 'react';
import {
  StyledModalWrapper,
  StyledModalBody,
  StyledModalHeader,
  StyledModal
} from './modal.style';
import { Button } from '../button';

const Modal = ({
  children,
  onClose,
  onEdit,
  onDelete,
  onSuccess,
  onCancel
}) => {
  return (
    <StyledModalWrapper>
      <StyledModal>
        <StyledModalHeader>
          <Button onClick={onEdit} size="small">
            <div className="remindly-pencil2"></div>
          </Button>
          <Button onClick={onDelete} size="small">
            <div className="remindly-bin"></div>
          </Button>
          <Button onClick={onClose} size="small">
            <div className="remindly-cross"></div>
          </Button>
        </StyledModalHeader>
        <StyledModalBody>{children}</StyledModalBody>
      </StyledModal>
    </StyledModalWrapper>
  );
};

export { Modal };
