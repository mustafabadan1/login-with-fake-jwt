import React from 'react';

const Categories = ({ className, height, width }) => {
  return (
    <svg 
    
    className={className}
    width={width}
    height={height}
    xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7Zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3ZM4.003 9 4 20h11V9H4.003Z'

      />
    </svg>
  );
};

export { Categories };