import React from 'react';
import './App.css';
import Home from './Components/Home'
import MainComponent from './Components/MainComponent';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router basename="SwiggyAppClone">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/restaurant/:rid" component={MainComponent} />
      </Switch>
    </Router>
  );
}

export default App;
