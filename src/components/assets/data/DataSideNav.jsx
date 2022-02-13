import react from 'react';
import { Icon } from '../../icon';

export const DataSideNav = [
  {
    display_name: 'Dashboard',
    route: '/',
    Icon: <Icon name='DashboardIcon' width="24" />,
  },

  {
    display_name: 'Analytics',
    route: '/analytics',
    Icon: <Icon name='Ana'width="24"  />,
  },
  {
    display_name: 'Inventory',
    route: '/inventory',
    Icon: <Icon name='Invetroy' width="24" />,
  },
  {
    display_name: 'Categories',
    route: '/categories',
    Icon: <Icon name='Categories'width="24"  />,
  },

  {
    display_name: 'Reports',
    route: '/reports',
    Icon: <Icon name='Reports' width="24" />,
  },
  {
    display_name: 'Notification',
    route: '/notification',
    Icon: <Icon name='Noti' width="24" />,
  },
  {
    display_name: 'Suppliers',
    route: '/suppliers',
    Icon: <Icon name='Suppliers'width="24"  />,
  },

  // {
  //   display_name: 'Log Out',
  //   route: '/logout',
  //   Icon: <Icon name='Signout' width="24" />,
  // },
];
