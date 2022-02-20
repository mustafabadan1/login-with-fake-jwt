import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <div cla>
      <section className='pb-20 relative block bg-gray-900'>
        <div className='container mx-auto px-4 lg:pt-24 lg:pb-64'>
          <div className='flex flex-wrap text-center justify-center'>
            <div className='w-full lg:w-6/12 px-4'>
              <h2 className='text-4xl font-semibold text-white'>
                Build something
              </h2>
              <p className='text-lg leading-relaxed mt-4 mb-4 text-gray-300'>
                Put the potentially record low maximum sea ice extent tihs year
                down to low ice. According to the National Oceanic and
                Atmospheric Administration, Ted, Scambos.
              </p>
            </div>
          </div>

          {/* three element */}
          <div className=' flex flex-wrap mt-24 justify-center'>
            <div className='w-full lg:w-3/12 px-4 text-center'>
              <div className='text-gray-300 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
                {/* <i className="fas fa-medal text-xl"></i> */}
              </div>
              <h6 className='text-xl mt-5 font-semibold text-white'>
                Excelent Services
              </h6>
              <p className='mt-2 mb-4 text-gray-300'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className='w-full lg:w-3/12 px-4 text-center'>
              <div className='text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
                {/* <i class="fas fa-poll text-xl"></i> */}
              </div>
              <h5 className='text-xl mt-5 font-semibold text-white'>
                Grow your market
              </h5>
              <p className='mt-2 mb-4 text-gray-400'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className='w-full lg:w-3/12 px-4 text-center'>
              <div className='text-gray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
                {/* <i className="fas fa-lightbulb text-xl"></i> */}
              </div>
              <h5 className='text-xl mt-5 font-semibold text-white'>
                Launch time
              </h5>
              <p className='mt-2 mb-4 text-gray-300'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </section>
        {/*  log in  */}
      <section className='relative block pt-24 lg:pt-0 bg-gray-900'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap justify-center lg:-mt-64 -mt-48'>
            <div className='w-full lg:w-6/12 px-4'>
              <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-50'>
                <div className='flex-auto p-5 lg:p-10'>
                  <h4 className='text-2xl font-semibold'>
                    Want to work with us?
                  </h4>
                  <p className='leading-relaxed mt-1 mb-4 text-gray-500'>
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  <div className='relative w-full mb-3 mt-8'>
                    <label
                      className='block uppercase text-gray-600 text-xs font-bold mb-2'
                  
                    >
                   Email
                    </label>
 
                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Your Email" />
                  </div>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-gray-600 text-xs font-bold mb-2'
                    
                    >
                      Email
                    </label>
            

                    <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email"/>
                  </div>
                  
                  <div className='text-center mt-6'>
                    <button
                      className=' bg-blue-500 w-2/4 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                   
                    >
                     Log in
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
