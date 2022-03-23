import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Page() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className=' pb-12 overflow-y-hidden bg-gray-100' style={{ minHeight: 800 }}>
        {/* header & Home */}
        <div className=' '>
          
          <nav className='w-full border-b shadow-sm  '>
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
                  onClick={() => setShow(!show)}
                  className={`${
                    show ? 'hidden' : ''
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
                  className={` ${show ? '' : 'hidden'} md:block lg:block `}
                >
                  <button
                    onClick={() => setShow(!show)}
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
                      <Link to='home'>Home</Link>
                    </li>
                    <li className='text-gray-700 hover:text-blue-500 hover:border-blue-400 border-transparent border-b-2   cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10 select-none'>
                      <Link to='features'>Features</Link>
                    </li>
                    <li className='text-gray-700 hover:text-blue-500 hover:border-blue-400 border-transparent border-b-2   cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10 select-none'>
                      <Link to='/'>Company</Link>
                    </li>

                    <li className='text-gray-700 hover:text-blue-500 hover:border-blue-400 border-transparent border-b-2   cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10 select-none'>
                      <Link to='/'>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <button className='focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-blue-600 text-blue-600 px-4 sm:px-8 py-1 sm:py-3 text-sm select-none'>
                Sign In
              </button>
            </div>
          </nav>
          {/* Home */}
          <div className='bg-gray-100 my-12'>
            <div className='container mx-auto  flex flex-col items-center py-12 sm:py-24'>
              <div className='w-11/12 sm:w-2/3 lg:flex justify-center  items-center flex-col  mb-5 sm:mb-10'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black  leading-7  tracking-wider  md:leading-10'>
                  Everything you need to keep your
                  <span className='text-blue-600 tracking-normal px-2'>
                    Inventory
                  </span>
                  organized
                </h1>
                <p className='mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg'>
                  Storek’s Inventory Management System  helps in keeping you on
                  top of your inventory, especially in multiple locations. With
                  various tools
                </p>
              </div>
              <div className='flex justify-center items-center'>
                <button className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 bg-blue-600 transition duration-150 ease-in-out hover:bg-blue-500 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-blue-600 py-2 sm:py-4 text-sm'>
                  Get Started
                </button>
                <button className='ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 bg-transparent transition duration-150 ease-in-out hover:border-sky-700 lg:text-xl lg:font-bold  hover:text-sky-500 rounded border border-sky-500 text-sky-700 px-4 sm:px-10 py-2 sm:py-4 text-sm'>
                  Featuers
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* End Home & header */}

        {/* Features */}
        <div>
          <section className='max-w-8xl mx-auto my-18 container bg-gray-100 pt-16'>
            <div>
              <div className='flex items-center flex-col px-4'>
                <p className='focus:outline-none uppercase text-sm text-center text-gray-600 leading-4 border-b-2 pb-1 border-blue-200'>
                  in few easy steps
                </p>
                <h1 className='focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4'>
                  Create Beautiful Landing Pages &amp; Web Apps in a Jiffy
                </h1>
              </div>
              <div
                aria-label='group of cards'
                className='focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4'
              >
                <div
                  aria-label='card 1'
                  className='focus:outline-none flex sm:w-full md:w-5/12 pb-20'
                >
                  <div className='w-20 h-20 relative mr-5'>
                    <div className='absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1' />
                    <div className='absolute text-white bottom-0 left-0 bg-blue-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3'>
                      <img
                        src='https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg'
                        alt='drawer'
                      />
                    </div>
                  </div>
                  <div className='w-10/12'>
                    <h2 className='focus:outline-none text-lg font-bold leading-tight text-gray-800'>
                      Ready to use components
                    </h2>
                    <p className='focus:outline-none text-base text-gray-600 leading-normal pt-2'>
                      It provides a very simple start, no need to write a lot of
                      code, you just import it and start the primitive
                      components and create the ones you need.
                    </p>
                  </div>
                </div>
                <div
                  aria-label='card 2'
                  className='focus:outline-none flex sm:w-full md:w-5/12 pb-20'
                >
                  <div className='w-20 h-20 relative mr-5'>
                    <div className='absolute top-0 right-0 bg-blue-100 rounded w-16 h-16 mt-2 mr-1' />
                    <div className='absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3'>
                      <img
                        src='https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg'
                        alt='check'
                      />
                    </div>
                  </div>
                  <div className='w-10/12'>
                    <h2 className='focus:outline-none text-lg font-semibold leading-tight text-gray-800'>
                      Hight Quality UI you can reply on
                    </h2>
                    <p className='focus:outline-none text-base text-gray-600 leading-normal pt-2'>
                      Modify the visual appearance of your site – including
                      colors, fonts, margins and other style-related properties
                      – with a sophisticated style.
                    </p>
                  </div>
                </div>
                <div
                  aria-label='card 3'
                  className='focus:outline-none flex sm:w-full md:w-5/12 pb-20'
                >
                  <div className='w-20 h-20 relative mr-5'>
                    <div className='absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1' />
                    <div className='absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3'>
                      <img
                        src='https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg'
                        alt='html tag'
                      />
                    </div>
                  </div>
                  <div className='w-10/12'>
                    <h2 className='focus:outline-none text-lg font-semibold leading-tight text-gray-800'>
                      Coded by Developers for Developers
                    </h2>
                    <p className='focus:outline-none text-base text-gray-600 leading-normal pt-2'>
                      Instead of just giving you the tools to create your own
                      site, they offer you a list of themes you can choose from.
                      Thus a handy product.
                    </p>
                  </div>
                </div>
                <div
                  aria-label='card 4'
                  className='focus:outline-none flex sm:w-full md:w-5/12 pb-20'
                >
                  <div className='w-20 h-20 relative mr-5'>
                    <div className='absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1' />
                    <div className='absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3'>
                      <img
                        src='https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg'
                        alt='monitor'
                      />
                    </div>
                  </div>
                  <div className='w-10/12'>
                    <h2 className='focus:outline-none text-lg font-semibold leading-tight text-gray-800'>
                      The Last UI kit you’ll ever need
                    </h2>
                    <p className='focus:outline-none text-base text-gray-600 leading-normal pt-2'>
                      We have chosen the bright color palettes that arouse the
                      only positive emotions. The kit that simply assures to be
                      loved by everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Page;
