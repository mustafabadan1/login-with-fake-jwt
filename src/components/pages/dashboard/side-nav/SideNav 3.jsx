import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import { DataSideNav } from '../../../assets/data/DataSideNav';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../../assets/icon';

function SideNav() {
  return (
    
    <div className='flex h-screen'>
      {/* side container */}
      <div className=' w-64 h-full  py-4 px-8 bg-neutral-50 border-r  '>

        {/* Logo */}
        <div className=' inline-flex w-full mt-5  border-b-2 border-neutral-100 tracking-widest	 '>
          {' '}
          <Icon name='DashboardIcon' className='w-9 h-9 fill-blue-600 ml-1' />
          <h3 className='-ml-2 uppercase text-base font-bold text-blue-500'>
            Storek
          </h3>
        </div>

        {/* nav */}
        <nav className='mt-16 '>
          <h2 className='ml-3 -mb-3 uppercase font-semibold text-sm opacity-30'>
            Issues
          </h2>

          <div className='ellement containerp'>
            {DataSideNav.map((item, index) => {
              return (
                <NavLink activeClassName =''
                  to={item.route}
                  key={index}
                  className=' flex px-3 my-2 text-lg font-medium   justify-between text-stone-900   rounded-lg'
                >
                  <span className=' inline-flex items-center'>
                    <span className=' w-5 h-5 my-2  fill-gray-600 mr-2 opacity-75'>
                      {item.Icon}
                    </span>

                    <span className=' ml-2 my-2 text-gray-900 '>
                      {item.display_name}
                    </span>
                  </span>

                  {/* <span className=' inline-block px-3 py-1 leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-2xl'>5</span> */}
                </NavLink>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default SideNav;

