import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Contacts from './pages/Contacts';
import EditContacts from './pages/EditContacts';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/edit-contacts">Add/Edit Contacts</Link>
            </li>
          </ul>
        </nav>

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
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

// function Contacts() {
//   return <h2>Edit Contacts</h2>;
// }

// function EditContacts() {
//   return <h2>Contacts</h2>;
// }

export default App;
