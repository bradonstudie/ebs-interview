import { Table, Button, Row, Spinner, Col } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import EditModal from '../components/EditModal';

const BASE_URL = 'https://elite-dev-test-api.azurewebsites.net/api';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() =>{
    fetch(
      `${BASE_URL}/Contact`,
      { method: "GET" }
    )
    .then(res => res.json())
    .then(response => {
      setContacts(response);
      setIsLoading(false);
    })
    .catch(error => console.log(error));
  }, [isLoading]);

  const deleteContact = (id) => {
    fetch(`${BASE_URL}/Contact/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then((response) => {
      setContacts(contacts.filter((el) => el.id !== response.id));
    });
  }

  return (
    <>
      <Row>
        <Col>
          <h2>Contacts</h2>
        </Col>
      </Row>

      <Row>
        <Col>
          { isLoading
            ? <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            : <Table responsive="md" striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Delete</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={ contact.id }>
                      <td>{ contact.id }</td>
                      <td>{ contact.name }</td>
                      <td>{ contact.email }</td>
                      <td>
                        <Button variant="danger" onClick={() => deleteContact(contact.id)}>
                          Delete Contact
                        </Button>
                      </td>
                      <td>
                        <EditModal contact={contact}>
                          Edit
                        </EditModal>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
          }
        </Col>
      </Row>
    </>
  );
}

export default Contacts;
