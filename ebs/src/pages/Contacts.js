import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import { Table, Button, Row, Spinner, Col } from 'react-bootstrap';

import EditModal from '../components/EditModal';
import { getContacts, deleteContact } from '../scripts/api';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    const fetchData = async () => {
      const dataContacts = await getContacts();
      setContacts(dataContacts);
      setIsLoading(false);
    }
    fetchData();
  }, [isLoading]);

  const addContactRow = (contact) => setContacts([contact, ...contacts]);

  const updateContactRow = (contact) => {
    setContacts([contact, ...contacts.filter((el) => el.id !== contact.id)]);
  }

  const deleteAndRemoveContactRow = async (id) => {
    const contactToDelete = await deleteContact(id);
    setContacts(contacts.filter((el) => el.id !== contactToDelete.id));
  }

  return (
    <>
      <Row>
        <Col xs={6}>
          <h2>Contacts</h2>
        </Col>
        <Col xs={6}>
          <div style={{float: 'right'}}>
            <EditModal
              contact={null}
              addContactRow={addContactRow}
              updateContactRow={updateContactRow}
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          { isLoading
            ? <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            : <Table responsive="md" bg="light" striped bordered hover>
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
                    <tr key={contact.id}>
                      <td>{contact.id}</td>
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>
                        <Button variant="danger" onClick={() => deleteAndRemoveContactRow(contact.id)}>
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </td>
                      <td>
                        <EditModal
                          contact={contact}
                          addContactRow={addContactRow}
                          updateContactRow={updateContactRow}
                        />
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
