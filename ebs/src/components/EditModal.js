import React, { useState, } from "react"
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'

import useInput from '../scripts/useInput';
import { createContact, updateContact } from '../scripts/api';

const EditModal = ({addContactRow, updateContactRow, contact}) => {
  const [show, setShow] = useState(false);
  const { setValue:setName, value:name, bind:bindName, reset:resetName } = useInput(contact ? contact.name : '');
  const { setValue:setEmail, value:email, bind:bindEmail, reset:resetEmail } = useInput(contact ? contact.email : '');

  const handleShow = () => setShow(true);
  const handleClose = (resetFlag) => {
    setShow(false);
    if (resetFlag) {
      if (contact) {
        setName(contact.name);
        setEmail(contact.email);
      } else {
        resetEmail();
        resetName();
      }
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Submitting Name ${name} and Email ${email}`);

    if (contact) {
      const updatedContact = await updateContact({ id: contact.id, name: name, email: email });
      updateContactRow(updatedContact);
    } else {
      const newContact = await createContact({ name: name, email: email });
      addContactRow(newContact);
      resetName();
      resetEmail();
    }

    handleClose(false);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        { contact
          ? <FontAwesomeIcon icon={faPen} />
          : <>
              <FontAwesomeIcon icon={faPlus} />
              &nbsp;
              <FontAwesomeIcon icon={faUser} />
            </>
        }
      </Button>

      <Modal
        show={show}
        onHide={() => handleClose(true)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>
            { contact
                ? `Edit ${contact.name}`
                : 'Add a Contact'
            }
          </Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            { contact &&
              <Form.Group>
                <Form.Label>Contact ID</Form.Label>
                <Form.Control placeholder="Disabled input" defaultValue={contact ? contact.id : null} disabled />
              </Form.Group>
            }
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
              { contact ? 'Update' : 'Create' }
            </Button>
            <Button variant="secondary" onClick={() => handleClose(true)}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EditModal;
