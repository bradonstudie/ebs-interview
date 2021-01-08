import { Table, Button, Container, Row } from 'react-bootstrap';

const Contacts = () => (
  <Container>
    <Row>
      <h2>
        Contacts
      </h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
                <Button variant="danger">Danger</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Row>
  </Container>
);

export default Contacts;
