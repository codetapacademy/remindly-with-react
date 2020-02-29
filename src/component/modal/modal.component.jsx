import React from "react";
import {
  StyledModalWrapper,
  StyledModalBody,
  StyledModalHeader,
  StyledModal
} from "./modal.style";
import { Button } from "../button";

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
          <Button onClick={onEdit} label="" size="small">
            <div className="remindly-pencil"></div>
          </Button>
          <Button onClick={onDelete} label="" size="small">
            <div className="remindly-bin"></div>
          </Button>
          <Button onClick={onClose} label="" size="small">
            <div className="remindly-cross"></div>
          </Button>
        </StyledModalHeader>
        <StyledModalBody>{children}</StyledModalBody>
      </StyledModal>
    </StyledModalWrapper>
  );
};

export { Modal };
