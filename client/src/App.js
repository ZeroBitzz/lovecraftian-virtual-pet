
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;

