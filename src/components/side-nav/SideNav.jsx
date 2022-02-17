import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/logo.svg';
import { Icon } from '../icon';
import { DataSideNav } from '../assets/data/DataSideNav';
// import styles from '../side-nav/SideNav.module.css';
import { NavLink } from 'react-router-dom';

function SideNav() {
  return (
    <div className='flex h-screen'>
      <div className=' h-screen flex'>
        {/* side container */}
        <div className=' w-64 py-8 px-5 bg-gray-100 drop-shadow		border-r border-gray-200 border-outline border-b-2  '>
        {/* Logo */}

          <div className=" inline-flex w-full border-b-2 border-gray-200  ">  <Icon name='DashboardIcon' className='w-9 h-9 fill-black  ml-1' />
          <h3 className='-ml-2 uppercase text-base font-bold text-blue-500'>Storek</h3>
          </div>

          {/* nav */}
          <nav className='mt-5 '>
        
            <h2 className='ml-3 -mb-3 uppercase font-semibold text-sm opacity-40'>Issues</h2>


              <div className='ellement container p'>

             
            {DataSideNav.map((item, index) => {
                return (
                  <Link
                  to={item.route} key={index}
                  className=' flex px-3 my-2 text-lg font-medium   justify-between text-gray-900  rounded-lg'
                >
                 <span className=' inline-flex items-center'>
               <span className=' w-5 h-5 fill-gray-600 mr-2 opacity-75'>{item.Icon}</span>  
    
                  <span className=' ml-2 py-2 text-gray-900 '>{item.display_name}</span>
                </span>
    
                {/* <span className=' inline-block px-3 py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-2xl'>5</span> */}
                </Link>
                );
              })}
             </div>
          </nav>
        </div>
      </div>
    </div>
  );
}




export default SideNav;

// const SideNav = () => {
//   return (
//     <div className='min-h-screen font-sans text-gray-900 '>
//       <aside className='Sidebar  py-6 px-10 w-48 border-r bg-indigo-100 border-gray-300 '>
//         <div className='Sidebarcontent'>
//           <nav className='sidebarnav'>
//             <ul className=' flex flex-col gap-y-6 pt-20'>
              // {DataSideNav.map((item, index) => {
              //   return (
              //     // link
              //     <>
              //       <li className='sidebarnav_item    bg-red-200'>
              //         <Link to={item.route} key={index}>
              //           {item.display_name}
              //           {item.Icon}
              //         </Link>
              //       </li>
              //     </>
              //   );
              // })}
//             </ul>
//           </nav>
//           {/* map */}
//         </div>
//       </aside>
//     </div>
//   );
// };

// export default SideNav;

// <div className={styles.navbar_container}>
//       <nav>
//         {/* Logo */}
//         <div className={styles.logo}>
//           <div className={styles.logo_icon}>
//             <Icon name='Ana' width='40' />
//           </div>
//           {/* X-icon */}
//           <Icon
//             name='CloseIcon'
//             width='30'
//             className={styles.mobile_cancel_icon}
//             onClick={() => setnav(!nav)}
//           />
//         </div>
//         {/* sub menu */}
//         <ul className={styles.menu_container}>
// {DataSideNav.map((item, index) => {
//   return (
//     // link
//     <>
//       {/* this is for one category , if you want to make it a two categories just change th data and enable the class name second_category in css  */}
//       <li className={styles.li_navlink}>
//         <NavLink
//           to={item.route}
//           key={index}
//           onClick={() => checkWindowSize()}
//           className={({ isActive }) =>
//             isActive ? styles.active : undefined
//           }
//         >
//           {/* side bar elements icon */}
//           {item.Icon}

//           {/* side bar elements name */}
//           <span className={styles.description}>
//             {item.display_name}
//           </span>
//         </NavLink>
//       </li>
//     </>
//   );
// })}

//           {/* LOGOUT BUTTON */}
//           <div
//             className={styles.btn_logout}
//             onClick={() => {
//               setnav(!nav);
//             }}
//           >
//             <Icon name='Signout' width='30' />
//           </div>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// inbox virsion

// function SideNav() {
//   return (
//     <div className='  flex-1 flex'>
//       <div className=' w-64 h-screen bg-gray-100'>
//         <nav className=' mx-10 my-10'>
//           <h2 className=' text-xs font-semibold text-gray-600 uppercase tracking-wide'>
//             Main Section
//           </h2>
//           <Link
//             to='/'
//             className=' flex items-center  justify-between text-md font-medium'
//           >
            // <span className=' inline-flex'>
            //   <Icon
            //     name='DashboardIcon'
            //     className=' fill-gray-600 h-4 text-gray-700  '
            //   />

            //   <span className=' ml-2 text-gray-900'>Dashboard</span>
            // </span>

            // <span className=' inline-block px-3 py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full'>5</span>
//           </Link>
//         </nav>
//       </div>
//     </div>
//   );
// }
