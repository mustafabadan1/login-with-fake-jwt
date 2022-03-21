/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from '@heroicons/react/outline';
import { DataFormPage } from '../assets/data/DataLogin';

import { Link } from 'react-router-dom';
import NavLogin from './NavLogin';

export default function LP() {
  return (
    <div className='container'>

    {/* navbar */}
<NavLogin/>
   {/* endnavbar */}





      {/* section */}
      <section className='bg-white :bg-gray-900'>
        <div className='container px-6 py-10 mx-auto'>
          <h1 className='text-5xl font-semibold text-gray-800 capitalize lg:text-6xl '>
            explore our
            <br />
            awesome{' '}
            <span className='underline decoration-blue-500'>Components</span>
          </h1>

          <p className='mt-4 text-gray-500 xl:mt-6 '>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            quam voluptatibus
          </p>
          {/* container */}
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2'>
            {/* element */}
            <div className='p-8 space-y-3 border-2 border-blue-300   rounded-xl'>
              <span className='inline-block text-red-400 '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-8 h-8'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
                  />
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z'
                  />
                </svg>
              </span>

              <h1 className='text-2xl font-semibold text-gray-700 capitalize '>
                Simple & clean designs
              </h1>

              <p className='text-gray-500 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>

              <Link
                href='#'
                className='inline-flex p-2 text-red-400  capitalize transition-colors duration-200 transform bg-red-50 rounded-full  hover:underline hover:text-red-600 '
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </Link>
            </div>
            {/* End elment */}
          </div>
        </div>
      </section>
       {/* End section */}
    </div>
  );
}
