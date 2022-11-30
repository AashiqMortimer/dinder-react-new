import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import "./ModalLink.css" 

const ModalLink = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
 
  return (
    <div className="modal__window">
        <IconButton onClick={toggle}>
            <AccountCircleIcon className="account__icon" 
            />
        </IconButton>
      <Modal size="xl" isOpen={modal} toggle={toggle}>
        <ModalBody className="modal__body">
          <iframe
            className="iframe"
            title="Customer account"
            src="https://user-authentication-dinder.herokuapp.com/"
          />
        </ModalBody>
        <ModalFooter>
          <Button className="button" onClick={toggle}>
            CLOSE{" "}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
 
export default ModalLink;