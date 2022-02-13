import React, { useState } from 'react';
import { Icon } from '../icon';
import { DataSideNav } from '../assets/data/DataSideNav';
import styles from '../side-nav/SideNav.module.css';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
  // state
  const [nav, setnav] = useState(false);

  //  function to chick the size screen
  const checkWindowSize = () => {
    if (window.innerWidth < 1024) setnav(!nav);
  };

  return (
    <div className={styles.navbar_container}>
      <nav>
        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logo_icon}>
            <Icon name='Ana' width='40' />
          </div>
          {/* X-icon */}
          <Icon
            name='CloseIcon'
            width='30'
            className={styles.mobile_cancel_icon}
            onClick={() => setnav(!nav)}
          />
        </div>
        {/* sub menu */}
        <ul className={styles.menu_container}>
          {DataSideNav.map((item, index) => {
            return (
              // link
              <>
                {/* this is for one category , if you want to make it a two categories just change th data and enable the class name second_category in css  */}
                <li className={styles.li_navlink}>
                  <NavLink
                    to={item.route}
                    key={index}
                    onClick={() => checkWindowSize()}
                    className={({ isActive }) =>
                      isActive ? styles.active : undefined
                    }
                  >
                    {/* side bar elements icon */}
                    {item.Icon}

                    {/* side bar elements name */}
                    <span className={styles.description}>
                      {item.display_name}
                    </span>
                  </NavLink>
                </li>
              </>
            );
          })}

          {/* LOGOUT BUTTON */}
          <div
            className={styles.btn_logout}
            onClick={() => {
              setnav(!nav);
            }}
          >
            <Icon name='Signout' width='30' />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;

// const SideNav = () => {
//   return (
//     <div className='min-h-screen font-sans text-gray-900 '>
//       <aside className='Sidebar  py-6 px-10 w-48 border-r bg-indigo-100 border-gray-300 '>
//         <div className='Sidebarcontent'>
//           <nav className='sidebarnav'>
//             <ul className=' flex flex-col gap-y-6 pt-20'>
//               {DataSideNav.map((item, index) => {
//                 return (
//                   // link
//                   <>
//                     <li className='sidebarnav_item    bg-red-200'>
//                       <Link to={item.route} key={index}>
//                         {item.display_name}
//                         {item.Icon}
//                       </Link>
//                     </li>
//                   </>
//                 );
//               })}
//             </ul>
//           </nav>
//           {/* map */}
//         </div>
//       </aside>
//     </div>
//   );
// };

// export default SideNav;
