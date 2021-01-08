import React, { useState } from "react"
import { Modal, Button, Form } from 'react-bootstrap';
import useInput from './UseInput';

const EditModal = (props) => {
  const { contact } = props;
  const { value, bind, reset } = useInput('');


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Submitting Name ${value}`);
      reset();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit { contact.name }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Password" defaultValue={contact.name} {...bind}/>
            </Form.Group>

            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" defaultValue={ contact.email }/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">
            Update
          </Button>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
