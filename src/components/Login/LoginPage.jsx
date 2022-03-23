import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import Featuers from './Featuers';
import HomeLogin from './HomeLogin';
import NavbarLogin from './NavbarLogin';

function Page() {
  return (
    <>
      <div
        className=' pb-12 overflow-y-hidden bg-gray-100'
        style={{ minHeight: 800 }}
      >
        {/* Navbar */}
        <NavbarLogin />
        {/* Navbar */}

        {/* Home */}
        <HomeLogin />
        {/* End Home & header */}

        {/* Features */}
        <Featuers/>
         {/* End Features */}

         {/* Contact */}
         <Contact/>
         {/* end contact */}

      </div>
    </>
  );
}

export default Page;
