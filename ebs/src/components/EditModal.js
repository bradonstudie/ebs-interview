import React, { useState, useEffect } from "react"
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import useInput from './UseInput';

const EditModal = (props) => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show, setShow] = useState(false);

  const { contact } = props;

  const { value:name, bind:bindName, reset:resetName } = useInput(contact.name);
  const { value:email, bind:bindEmail, reset:resetEmail } = useInput(contact.email);

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Submitting Name ${name} and Email ${email}`);
      resetName();
      resetEmail();
      handleClose();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <FontAwesomeIcon icon={faPen} />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit {contact.name}</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Contact ID</Form.Label>
              <Form.Control placeholder="Disabled input" defaultValue={contact.id} disabled />
            </Form.Group>

            <Form.Group controlId="formGroupName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Name" {...bindName} />
            </Form.Group>

            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Email" {...bindEmail} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" value="Submit">
              Update
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EditModal;
