import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideNav from './components/side-nav/SideNav';
import Home from './components/Home';

import Header from './components/top-nav/Header';
import Login from './components/Login/Login';

function App() {
  return (
    <>
  
      <Router>
        <SideNav/>
        <Switch>
          
          <Route path='/Home' component={Home} />
          <Route path='/login' component={Login} />
          
<Home/>

        </Switch>
      </Router>

    </>
  );
}

export default App;
