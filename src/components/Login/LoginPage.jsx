import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import Featuers from './Featuers';
import HomeLogin from './HomeLogin';
import Login from './Login';
import NavbarLogin from './NavbarLogin';

function Page() {
  return (
    <>
      <div
        className='   overflow-y-hidden bg-gray-100'
      
      >
        {/* Navbar */}
        <NavbarLogin />
        {/* Navbar */}

        {/* Home */}
      
        {/* End Home & header */}

        {/* Features */}
        <Featuers/>
         {/* End Features */}

         {/* Contact */}
         <Contact/>
         {/* end contact */}


         {/* Login form */}
         <Login/>
         {/* End Login form */}


      </div>
    </>
  );
}

export default Page;
