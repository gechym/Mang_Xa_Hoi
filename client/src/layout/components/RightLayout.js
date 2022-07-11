import React from 'react';

const RightLayout = ({ children }) => {
  return (
    <div
      className="
      laptop:col-start-1 
      laptop:col-end-1 
      laptop:row-start-2 
      laptop:row-end-4 
      mobile:hidden
      tablet:hidden
      laptop:block 
      ring
      "
    >
      {children}
    </div>
  );
};

export default RightLayout;
