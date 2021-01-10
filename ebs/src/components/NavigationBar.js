import { Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => (
  <Navbar collapseOnSelect expand="lg" variant="light" style={{marginBottom: '1rem'}}>
    <Navbar.Brand href="/" id="brand">EBS</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/contacts">Contacts</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;