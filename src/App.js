import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Profile from './Components/Profile';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import Friends from './Components/Friends';

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
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/profile'>
            <Navbar />
            <Profile />
          </Route>
          <Route path='/friends'>
            <Navbar />
            <Friends />
          </Route>
          <Route path='/'>
            <Navbar />
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
