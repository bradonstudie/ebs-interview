import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from '../pages/Home';
import Contacts from '../pages/Contacts';

const PageRouter = () => (
  <Router>
    <Switch>
      <Route path="/contacts">
        <Contacts />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default PageRouter;
