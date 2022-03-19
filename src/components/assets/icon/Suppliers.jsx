import React from 'react';

const Suppliers = ({ className, height, width }) => {
  return (
    <svg 
    className={className}
    width={width}
    height={height}
    
    xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M3 19V5.7a1 1 0 0 1 .658-.94l9.671-3.516a.5.5 0 0 1 .671.47v4.953l6.316 2.105a1 1 0 0 1 .684.949V19h2v2H1v-2h2Zm2 0h7V3.855L5 6.401V19Zm14 0v-8.558l-5-1.667V19h5Z'

      />
    </svg>
  );
};

export { Suppliers };
