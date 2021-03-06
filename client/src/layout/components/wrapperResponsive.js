import React from 'react';

export const WrapperResponsive = ({ children }) => {
  return (
    <div
      className="
                bg-lightSecondary  dark:bg-darkSecondary
                mx-auto 
                laptop:w-[75%]
                tablet:w-[70%] 
                laptop:min-w-[470px] 
                tablet:min-w-[470px] 
                laptop:tablet:max-w-[650px] 
                mobile:w-full
                rounded-lg
                shadow-lg
                mb-4
                "
    >
      {children}
    </div>
  );
};

export default WrapperResponsive;
