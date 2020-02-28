import React from "react";
import {
  StyledModalWrapper,
  StyledModalBody,
  StyledModalHeader,
  StyledModal
} from "./modal.style";
import { Button } from "../button";

const Modal = ({ children, onClose, onSuccess, onCancel }) => {
  return (
    <StyledModalWrapper>
      <StyledModal>
        <StyledModalHeader>
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
