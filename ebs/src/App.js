import './App.css';
import { Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import NavigationBar from './components/NavigationBar';
import PageRouter from './components/PageRouter';

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <Container>
        <PageRouter />
      </Container>
    </Fragment>
  );
}

export default App;
