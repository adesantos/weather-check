import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/login/login';
import PrivateRoute from './privateRoute';

export function App() {
  const auth = localStorage.getItem('auth')==="true"? true : false;

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={PrivateRoute} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}