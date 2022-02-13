import React from 'react';

const DashboardIcon = ({ className, height, width }) => {
  return (
    <svg
    className={className}
      width={width}
      height={height}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.00002 13.2C9.99414 13.2 10.8 14.0059 10.8 15V19.8C10.8 20.7941 9.99414 21.6 9.00002 21.6H4.20002C3.20591 21.6 2.40002 20.7941 2.40002 19.8V15C2.40002 14.0059 3.20591 13.2 4.20002 13.2H9.00002ZM19.8 13.2C20.7941 13.2 21.6 14.0059 21.6 15V19.8C21.6 20.7941 20.7941 21.6 19.8 21.6H15C14.0059 21.6 13.2 20.7941 13.2 19.8V15C13.2 14.0059 14.0059 13.2 15 13.2H19.8ZM9.00002 14.4H4.20002C3.86866 14.4 3.60002 14.6687 3.60002 15V19.8C3.60002 20.1313 3.86866 20.4 4.20002 20.4H9.00002C9.33139 20.4 9.60002 20.1313 9.60002 19.8V15C9.60002 14.6687 9.33139 14.4 9.00002 14.4ZM19.8 14.4H15C14.6687 14.4 14.4 14.6687 14.4 15V19.8C14.4 20.1313 14.6687 20.4 15 20.4H19.8C20.1313 20.4 20.4 20.1313 20.4 19.8V15C20.4 14.6687 20.1313 14.4 19.8 14.4ZM9.00002 2.4C9.99414 2.4 10.8 3.20589 10.8 4.2V9C10.8 9.99412 9.99414 10.8 9.00002 10.8H4.20002C3.20591 10.8 2.40002 9.99412 2.40002 9V4.2C2.40002 3.20589 3.20591 2.4 4.20002 2.4H9.00002ZM19.8 2.4C20.7941 2.4 21.6 3.20589 21.6 4.2V9C21.6 9.99412 20.7941 10.8 19.8 10.8H15C14.0059 10.8 13.2 9.99412 13.2 9V4.2C13.2 3.20589 14.0059 2.4 15 2.4H19.8ZM9.00002 3.6H4.20002C3.86866 3.6 3.60002 3.86863 3.60002 4.2V9C3.60002 9.33137 3.86866 9.6 4.20002 9.6H9.00002C9.33139 9.6 9.60002 9.33137 9.60002 9V4.2C9.60002 3.86863 9.33139 3.6 9.00002 3.6ZM19.8 3.6H15C14.6687 3.6 14.4 3.86863 14.4 4.2V9C14.4 9.33137 14.6687 9.6 15 9.6H19.8C20.1313 9.6 20.4 9.33137 20.4 9V4.2C20.4 3.86863 20.1313 3.6 19.8 3.6Z'
       
      />
    </svg>
  );
};

export { DashboardIcon };