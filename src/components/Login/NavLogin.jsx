import { useState } from 'react';
import { Link } from 'react-router-dom';

import React from 'react';

const NavLogin = () => {
  return (
    <>
      <section className='bg-white justify-center max-h-full sticky'>
        <nav className=' p-6  lg:flex lg:justify-between align-middle lg:items-center '>
          <div className='flex items-center justify-between'>
            <div>
              <a
                className='text-2xl font-bold text-gray-800 :text-white lg:text-3xl hover:text-gray-700 :hover:text-gray-300'
                href='#'
              >
                Brand
              </a>
            </div>
          </div>

          {/*  Mobile Menu open: "block", Menu closed: "hidden"  */}
          <div className='  block lg:my-0 my-4  space-y-2 lg:text-lg align-middle justify-center md:text-base text-center lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0'>
            <a
              className='mx-6 text-gray-700 transition-colors duration-200 transform :text-gray-200 :hover:text-blue-400  focus:text-blue-500 border-b-2 border-transparent focus:border-blue-500'
              href='#'
            >
              Home
            </a>
            <a
              className='mx-6 text-gray-700 transition-colors duration-200 transform :text-gray-200 :hover:text-blue-400 focus:text-blue-500 border-b-2 border-transparent focus:border-blue-500'
              href='#'
            >
              Components
            </a>
          </div>

          <a className='flex items-center justify-center align-middle  tracking-wide bg-transparent  text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent  transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              stroke-width='2'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span class='mx-1'>LogIn</span>
          </a>
        </nav>

        <div className='container px-6 py-16 mx-auto text-center'>
          <div className='max-w-lg mx-auto'>
            <h1 className='text-3xl font-bold text-gray-800 :text-white md:text-4xl'>
              Building Your Next App with our Awesome components
            </h1>
            <p className='mt-6 text-gray-500 :text-gray-300'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              similique obcaecati illum mollitia.
            </p>
            <button className='px-6 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 md:mx-0 md:w-auto focus:outline-none'>
              Start 14-Day free trial
            </button>
            <p className='mt-3 text-sm text-gray-400 '>
              No credit card required
            </p>
          </div>

          <div className='flex justify-center mt-10'>
            <div className='w-full h-64 bg-blue-600 rounded-xl md:w-4/5'></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavLogin;
