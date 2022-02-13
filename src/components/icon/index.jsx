import React from 'react';

import { Chat } from './Chat';
import { Ana } from './Ana';
import { DashboardIcon } from './DashboardIcon';
import { Invetroy } from './Invetroy';
import { Noti } from './Noti';
import { Reports } from './Reports';
import { Signout } from './Signout';
import { Suppliers } from './Suppliers';
import { NavMenuIcon } from './NavMenuIcon';
import { CloseIcon } from './CloseIcon';
import { Categories } from './Categories';



const Icon = (props) => {
  switch (props.name) {
    case 'Chat':
      return <Chat {...props} />;

    case 'Ana':
      return <Ana {...props} />;

    case 'DashboardIcon':
      return <DashboardIcon {...props} />;

    case 'Invetroy':
      return <Invetroy {...props} />;

    case 'Noti':
      return <Noti {...props} />;

    case 'Reports':
      return <Reports {...props} />;

    case 'Signout':
      return <Signout {...props} />;

    case 'Suppliers':
      return <Suppliers {...props} />;

    case 'NavMenuIcon':
      return <NavMenuIcon {...props} />;

      case 'CloseIcon':
        return <CloseIcon {...props} />;
        
      case 'Categories':
        return <Categories {...props} />;
      
    default:
      return <div />;
  }
};

export { Icon };
