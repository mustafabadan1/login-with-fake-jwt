import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login/Login';


function App() {
  return (
    <>
  
    
  {/* <Dashboard/> */}
        <Switch>
          
          <Route path='/Home' component={Home} />
          <Route path='/login' component={Login} />
          
<Home/>

        </Switch>
      

    </>
  );
}

export default App;
