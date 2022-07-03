import React from 'react';

const HeaderLayout = ({ children }) => {
  return (
    <div
      className="
        dark:bg-darkSecondary
        bg-lightSecondary
        shadow-md
        fixed top-0 left-0 right-0 z-10
        h-[56px]
        laptop:col-start-1 
        laptop:col-end-4 
        tablet:col-start-1 
        tablet:col-end-4 
        px-4
        flex
        items-center
      "
    >
      {children}
    </div>
  );
};

export default HeaderLayout;
