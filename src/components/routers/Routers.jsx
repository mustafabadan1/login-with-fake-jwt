import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Analaytics from '../analytics';
import Dashboard from '../dashboard/Dashboard';

const Routers = () => {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='/customers' component={Analaytics} />
    </Switch>
  );
};

export default Routers;
