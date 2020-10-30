import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Profile from './Components/Profile';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/profile'>
            <Navbar />
            <Profile />
          </Route>
          <Route path='/'>
            <Navbar />
            <h1>Quaranteam</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
