import {useState} from 'react';
import { Link } from 'react-router-dom';

const NavLogin = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div>
      <section className='bg-white :bg-gray-800'>
        <nav className='container p-6 mx-auto lg:flex lg:justify-between lg:items-center flex flex-wrap items-center'>
          <div className='flex items-center justify-between'>
            <div>
              <Link
                className='text-2xl font-bold text-gray-800 :text-white lg:text-3xl hover:text-gray-700 :hover:text-gray-300'
                href='#'
              >
                Brand
              </Link>
            </div>

            {/*  Mobile menu button */}
            <div className='flex lg:hidden'>
              <button
                type='button'
                className='text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600'
                aria-label='toggle menu'

                
              >
                <svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
                  <path
                    fill-rule='evenodd'
                    d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/*  Mobile Menu open: "block", Menu closed: "hidden"  */}
          <div className='flex flex-col mt-4 space-y-2 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0'>
            <Link
              className='mx-8 text-gray-700 transition-colors duration-200 transform :text-gray-200 :hover:text-blue-400 hover:text-blue-500'
              to='/'
            >
              Home
            </Link>
            <Link
              className='mx-8 text-gray-700 transition-colors duration-200 transform :text-gray-200 :hover:text-blue-400 hover:text-blue-500'
              to='/'
            >
              Components
            </Link>
            <Link
              className='mx-8 text-gray-700 transition-colors duration-200 transform :text-gray-200 :hover:text-blue-400 hover:text-blue-500'
              to='/'
            >
              Pricing
            </Link>
            <Link
              className='mx-8 text-gray-700 transition-colors duration-200 transform :text-gray-200 :hover:text-blue-400 hover:text-blue-500'
              to='/'
            >
              Contact
            </Link>
          </div>

          <Link
            className='block px-5 py-2 mt-4 font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto'
            to='/'
          >
            Get started
          </Link>
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
    </div>
  );
};

export default NavLogin;



// export default function Navbar({ fixed }) {
//                 const [navbarOpen, setNavbarOpen] = useState(false);
//                 return (
//                   <>
//                     <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
//                       <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
//                         <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
//                           <a
//                             className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
//                             href="#pablo"
//                           >
//                             pink Tailwind Starter Kit
//                           </a>
//                           <button
//                             className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
//                             type="button"
//                             onClick={() => setNavbarOpen(!navbarOpen)}
//                           >
//                             <i className="fas fa-bars"></i>
//                           </button>
//                         </div>
//                         <div
//                           className={
//                             "lg:flex flex-grow items-center" +
//                             (navbarOpen ? " flex" : " hidden")
//                           }
//                           id="example-navbar-danger"
//                         >
//                           <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
//                             <li className="nav-item">
//                               <a
//                                 className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
//                                 href="#pablo"
//                               >
//                                 <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Share</span>
//                               </a>
//                             </li>
//                             <li className="nav-item">
//                               <a
//                                 className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
//                                 href="#pablo"
//                               >
//                                 <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Tweet</span>
//                               </a>
//                             </li>
//                             <li className="nav-item">
//                               <a
//                                 className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
//                                 href="#pablo"
//                               >
//                                 <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Pin</span>
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </nav>
//                   </>
//                 );
//               }
              