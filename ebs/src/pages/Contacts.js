import { Table, Button, Row } from 'react-bootstrap';
import React, { useState, useEffect } from "react";

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

  return (
    <Row>
      <h2>
        Contacts
      </h2>

      { isLoading && <p>Contacts Loading...</p> }

      <Table striped bordered hover>
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
                <Button
                  variant="danger"
                  onClick={() => deleteContact(contact.id)}
                >
                  Delete Contact
                </Button>
              </td>
              <td>
                <Button
                  variant='primary'
                  onClick={() => openEditModal(contact)}
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Row>
  );
}

const deleteContact = (id) => {
  fetch(`${BASE_URL}/Contact/${id}`, {
    method: 'DELETE',
  })
  .then(res => res.text())
  .then(res => console.log(res));
}

const openEditModal = (contact) => {
  console.log(contact);
}

export default Contacts;
