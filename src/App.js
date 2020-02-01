import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import MainComponent from './MainComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Restaurants from './Restaurants';

function App() {
  return (
    <Router>
      <div>
        <Link to="/restaurants">Home</Link>
        {/* <Home /> */}
        {/* <MainComponent /> */}
      </div>
      {/* <div><Link to="/restaurant/:rid">Menu</Link></div> */}
      <Switch>
        <Route path="/restaurants">
          {/* <Home /> */}
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
