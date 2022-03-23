import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import View from './components/View';
import Login from './components/Login/Login';


function App() {
  return (
    <>
  
    
  {/* <Dashboard/> */}
        <Switch>
          
          <Route path='/View' component={View} />
          <Route path='/login' component={Login} />
          
<View/>

        </Switch>
      

    </>
  );
}

export default App;
