import React from 'react';
import TopNav from './components/top-nav/TopNav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './components/side-nav/SideNav';

function App() {
  return (
    <>
        <Router>
          {/* <TopNav /> */}
          <SideNav />
          <Routes>
            <Route path='/' />
          </Routes>
        </Router>
    </>
  );
}

export default App;
