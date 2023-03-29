import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Create from './views/Create';
import Dashboard from './views/Dashboard';
import View from './views/View'

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

        <Route exact path="/view/:id">
          <View/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
