import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../icon';
import { DataSideNav } from '../assets/data/DataSideNav';

const SideNav = () => {
  return (
    <div className='min-h-screen font-sans text-gray-900 '>
      <aside className='Sidebar  py-6 px-10 w-48 border-r bg-indigo-100 border-gray-300 '>
        <div className='Sidebarcontent'>
          <nav className='sidebarnav'>
            <ul className=' flex flex-col gap-y-6 pt-20'>
              {DataSideNav.map((item, index) => {
                return (
                  // link
                  <>
                    <li className='sidebarnav_item    bg-red-200'>
                      <Link to={item.route} key={index}>
                        {item.display_name}
                        {item.Icon}
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </nav>
          {/* map */}
        </div>
      </aside>
    </div>
  );
};

export default SideNav;

// map true

// <div>
// {DataSideNav.map((item, index) => {
//   return (
//     <ul className=' flex-col p-2 inline'>
//       <li key={index} className='items w-4 '>
//         <Link to={item.route}>
//           {item.display_name}
//           <span className=''>{item.Icon}</span>
//         </Link>
//       </li>
//     </ul>
//   );
// })}
// </div>
