import React from 'react';
import Email from '../assets/images/EmailImg.svg';

const Contact = () => {
  return (
    <>
      <div className='  ' id='contact'>
        <div className=' my-10 mx-8 py-20 px-12 border-2 rounded-2xl border-blue-500 hover:border-blue-400'>
          <div className='text-4xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-6xl font-bold leading-10 text-center text-gray-800 '>
            <h1>We’re Here !</h1>
           
          </div>
          <p className=" text-xl md:text-base sm:text-sm text-gray-400 font-base text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <div className='sm:flex flex-wrap justify-center items-center text-center gap-10'>
            <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg :bg-gray-800'>
              <div className='flex-shrink-0'>
                <div className='flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-blue-500 text-white'>
                  <svg
                    width='20'
                    height='20'
                    fill='currentColor'
                    className='h-6 w-6'
                    viewBox='0 0 1792 1792'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z'></path>
                  </svg>
                </div>
              </div>
              <h3 className='text-3xl sm:text-xl text-gray-700 font-bold :text-white py-3'>
                Our Email
              </h3>
              <p className=' text-xl text-gray-500 :text-gray-300 py-4'>
              Storek@example.com
              </p>
            </div>
            <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg :bg-gray-800'>
              <div className='flex-shrink-0'>
                <div className='flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-blue-500 text-white'>
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
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                </div>
              </div>
              <h3 className='text-2xl sm:text-xl text-gray-700 font-semibold :text-white py-4'>
                Location
              </h3>
              <p className='text-md text-gray-500 :text-gray-300 py-4'>
                Karada Al-Wathiq Square 11, Baghdad , Iraq
              </p>
            </div>
            <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg :bg-gray-800'>
              <div className='flex-shrink-0'>
                <div className='flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-blue-500 text-white'>
                  <svg
                    width='20'
                    height='20'
                    fill='currentColor'
                    className='h-6 w-6'
                    viewBox='0 0 1792 1792'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z'></path>
                  </svg>
                </div>
              </div>
              <h3 className='text-2xl sm:text-xl text-gray-700 font-semibold :text-white py-4'>
                SEO Marketing
              </h3>
              <p className='text-md  text-gray-500 :text-gray-300 py-4'>
                Let us help you level up your search engine game, explore our
                solutions for digital marketing for your business.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
