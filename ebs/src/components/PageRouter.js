import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from '../pages/Home';
import Contacts from '../pages/Contacts';
import EditContacts from '../pages/EditContacts';

const PageRouter = () => (
  <Router>
    <Switch>
      <Route path="/contacts">
        <Contacts />
      </Route>
      <Route path="/edit-contacts">
        <EditContacts />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default PageRouter;