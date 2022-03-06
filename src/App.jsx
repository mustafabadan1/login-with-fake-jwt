import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideNav from './components/side-nav/SideNav';
import HomePage from './components/HomePage';

import Header from './components/top-nav/Header';
import Login from './components/Login/Login';

function App() {
  return (
    <>
  
      <Router>
        
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={SideNav} />


        </Switch>
      </Router>

    </>
  );
}

export default App;
