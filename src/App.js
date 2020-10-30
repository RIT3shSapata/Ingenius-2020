import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Profile from './Components/Profile';
import Home from './Components/Home';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
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
