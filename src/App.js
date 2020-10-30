import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
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
