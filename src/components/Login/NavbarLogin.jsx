import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavbarLogin = () => {
  const [open, setOpen] = useState(false);


  return (
    <>
      <nav className='w-full border-b shadow-sm   '>
        <div className='py-5 md:py-0 container mx-auto px-6 flex items-center justify-between'>
          <div>
            <Link
              className='text-2xl font-bold text-gray-800 :text-white lg:text-3xl hover:text-gray-700 :hover:text-gray-300'
              to='#'
            >
              Brand
            </Link>
          </div>
          <div>
            <button
              onClick={() => setOpen(!open)}
              className={`${
                open ? 'hidden' : ''
              } sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M4 8h16M4 16h16'
                />
              </svg>
            </button>
            <div
              id='menu'
              className={` ${open ? '' : 'hidden'} md:block lg:block `}
            >
              <button
                onClick={() => setOpen(!open)}
                className={`block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6`}
              >
                <span className='  text-blue-400'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    stroke-width='2'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </span>
              </button>
              <ul className='flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20'>
                <li className='text-gray-700 hover:text-blue-500 hover:border-blue-400 border-transparent border-b-2   cursor-pointer text-base lg:text-lg pt-10 md:pt-0 select-none '>
                  <Link to='/home'>Home</Link>
                </li>
                <li className='text-gray-700 hover:text-blue-500 hover:border-blue-400 border-transparent border-b-2   cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10 select-none'>
                  <Link to='/features'>Features</Link>
                </li>
                <li className='text-gray-700 hover:text-blue-500 hover:border-blue-400 border-transparent border-b-2   cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10 select-none'>
                  <Link to='/compnents'>Components</Link>
                </li>

                <li className='text-gray-700 hover:text-blue-500 hover:border-blue-400 border-transparent border-b-2   cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10 select-none'>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <button className='focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-blue-600 text-blue-600 px-4 sm:px-8 py-1 sm:py-3 text-sm select-none'>
            Sign In
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavbarLogin;
