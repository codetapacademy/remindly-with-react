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
            <i className="remindly-pencil"></i>
          </Button>
          <Button onClick={onDelete} label="" size="small">
            <i className="remindly-bin"></i>
          </Button>
          <Button onClick={onClose} label="" size="small">
            <i className="remindly-cross"></i>
          </Button>
        </StyledModalHeader>
        <StyledModalBody>{children}</StyledModalBody>
        <div>
          <Button onClick={onSuccess} label="Save" size="small">
            <i className="remindly-save"></i>
          </Button>
        </div>
      </StyledModal>
    </StyledModalWrapper>
  );
};

export { Modal };
