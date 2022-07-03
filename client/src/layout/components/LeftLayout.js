import React from 'react';

const LeftLayout = ({ children }) => {
  return (
    <div
      className="
      laptop:col-start-3 
      laptop:col-end-3 
      laptop:row-start-2 
      laptop:row-end-4 
      tablet:row-start-2 
      tablet:row-end-4
      tablet:col-start-3
      tablet:col-end-4
      tablet:block
      mobile:hidden
      
      "
    >
      {children}
    </div>
  );
};

export default LeftLayout;
