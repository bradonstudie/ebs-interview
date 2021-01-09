import { Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => (
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">EBS Contact Manager</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/contacts">Contacts</Nav.Link>
    </Nav>
  </Navbar>
);

export default NavigationBar;