import React from 'react';

import { Chat } from './Chat';
import { Ana } from './Ana';
import { Dashboard } from './Dashboard';
import { Invetroy } from './Invetroy';
import { Noti } from './Noti';
import { Reports } from './Reports';
import { Signout } from './Signout';
import { Suploiers } from './Suploiers';

const Icon = (props) => {
  switch (props.name) {
    case 'Chat':
      return <Chat {...props} />;

    case 'Ana':
      return <Ana {...props} />;

    case 'Dashboard':
      return <Dashboard {...props} />;

    case 'Invetroy':
      return <Invetroy {...props} />;

    case 'Noti':
      return <Noti {...props} />;

    case 'Reports':
      return <Reports {...props} />;

    case 'Signout':
      return <Signout {...props} />;

    case 'Suploiers':
      return <Suploiers {...props} />;

    default:
      return <div />;
  }
};

export { Icon };
