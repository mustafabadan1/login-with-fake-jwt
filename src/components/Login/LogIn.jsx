import React from 'react';
import { Link } from 'react-router-dom';
import FormLogin from './FormLogin';

const LogIn = () => {
  return (
    // navbar
<div className="">
<nav className="bg-white border-gray-600 px-4 sm:px-4 py-2.5  border-b shadow-md shadow-slate-400   dark:bg-gray-800">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
  <a href="#" class="flex">
    <svg className="mr-3 h-10" viewBox="0 0 52 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z" fill="#76A9FA"/><path d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z" fill="#A4CAFE"/><path d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z" fill="#1C64F2"/></svg>
      <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Storek Inventory</span>
  </a>
  <div className="flex md:order-2">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
    
  </div>
  
  </div>
</nav>

{/* content */}
    <div className='bg-gray-900 h-screen'>


      {/* info log in section */}
      <section className='pb-6 relative block '>
        <div className='container mx-auto px-4 lg:pt-24 lg:pb-7'>
          <div className='flex flex-wrap text-center justify-center'>
            <div className='w-full lg:w-6/12 px-4'>
              <h2 className='text-4xl font-semibold text-white'>
                Storek Inventroy mangmant
              </h2>
              <p className='text-lg leading-relaxed mt-4 mb-4 text-gray-300'>
                Put the potentially record low maximum sea ice extent tihs year
                down to low ice. According to the National Oceanic and
                Atmospheric Administration, Ted, Scambos.
              </p>
            </div>
          </div>

          {/* three elemen */}
            <div className=' flex flex-wrap mt-24 justify-center'> 
            <div className='w-full lg:w-3/12 px-4 text-center'>
              <div className='text-gray-300 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
                 <i className="fas fa-medal text-xl"></i> 
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
                <i class="fas fa-poll text-xl"></i>
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

   <FormLogin/>

 


      

    
    </div>
  </div>
  );
};

export default LogIn;
