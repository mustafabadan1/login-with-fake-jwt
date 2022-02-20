import react from 'react';
import { Icon } from '../../icon';

export const DataSideNav = [
  {
    display_name: 'Dashboard',
    route: '/',
    Icon: <Icon name='DashboardIcon'  />,
  },

  {
    display_name: 'Analytics',
    route: '/analytics',
    Icon: <Icon name='Ana' />,
  },
  {
    display_name: 'Inventory',
    route: '/inventory',
    Icon: <Icon name='Invetroy' />,
  },
  {
    display_name: 'Categories',
    route: '/categories',
    Icon: <Icon name='Categories' />,
  },

  {
    display_name: 'Reports',
    route: '/reports',
    Icon: <Icon name='Reports' />,
  },

  {
    display_name: 'Users',
    route: '/users',
    Icon: <Icon name='UsersIcon' />,
  },
  {
    display_name: 'Suppliers',
    route: '/suppliers',
    Icon: <Icon name='Suppliers' />,
  },

  // {
  //   display_name: 'Log Out',
  //   route: '/logout',
  //   Icon: <Icon name='Signout' width="24" />,
  // },
];
