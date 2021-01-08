import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';

import NavigationBar from './components/NavigationBar';
import PageRouter from './components/PageRouter';

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <PageRouter />
    </Fragment>
  );
}

export default App;
