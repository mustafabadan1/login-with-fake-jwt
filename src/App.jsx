import React from 'react';
import TopNav from './components/top-nav/TopNav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './components/side-nav/SideNav';
import LogIn from './components/Login/LogIn';

function App() {
  return (
    <>
        <Router>
          {/* <TopNav /> */}
      <LogIn/>
          {/* <SideNav /> */}
          <Routes>
            <Route path='/' />
          

          </Routes>
        </Router>
    </>
  );
}

export default App;
