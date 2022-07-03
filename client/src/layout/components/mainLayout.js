import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div
      className="
        laptop:col-start-2 laptop:col-end-2 
        laptop:row-start-2 laptop:row-end-4 
        tablet:col-start-1 tablet:col-end-3 
        tablet:row-start-2 tablet:row-end-4
        mobile:mt-16
        laptop:mt-0
        tablet:mt-0
        border-2
        "
    >
      {children}
    </div>
  );
};

export default MainLayout;
