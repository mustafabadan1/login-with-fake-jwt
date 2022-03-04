import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideNav from './components/side-nav/SideNav';
import HomePage from './components/HomePage';
import FormLogin from './components/Login/FormLogin';
import Header from './components/top-nav/Header';

function App() {
  return (
    <>
      <Router>
         <Header />
          <Switch>
            <Route exact component={HomePage } path='/' />
            <Route component={FormLogin } path='/formLogin' />
          </Switch>
     
      </Router>
    </>
  );
}

export default App;
