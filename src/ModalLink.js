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
      <Button onClick={toggle}>
        <IconButton>
            <AccountCircleIcon className="account__icon" 
            //fontSize="large" 
            />
        </IconButton>
        </Button>
      <Modal size="xl" isOpen={modal} toggle={toggle}>
        <ModalHeader>Title</ModalHeader>
        <ModalBody className="modal__body">
          <iframe
            className="iframe"
            title="Customer account"
            src="https://user-authentication-dinder.herokuapp.com/"
          />
        </ModalBody>
        <ModalFooter>
          <Button className="button" onClick={toggle}>
            OK{" "}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
 
export default ModalLink;