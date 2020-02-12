import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import MainComponent from './MainComponent';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Restaurants from './Restaurants';

function App() {
  return (
    <Router basename="SwiggyAppClone">
      <div>
        {/* <Link to="/restaurants">Home</Link> */}
      {/* <Home /> */}
      {/* <MainComponent /> */}
    </div>
    {/* <div><Link to="/restaurant/:rid">Menu</Link></div> */}
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/restaurant/:rid">
        <MainComponent />
      </Route>
    </Switch>
    </Router>
  );
}

export default App;