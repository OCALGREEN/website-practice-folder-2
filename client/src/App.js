import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Create from './views/Create';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/dashboard">
          <Dashboard/>
        </Route>

        <Route exact path="/create">
          <Create/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
