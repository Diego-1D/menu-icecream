import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/menu'>
          <Menu />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
