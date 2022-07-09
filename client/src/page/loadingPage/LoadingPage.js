import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { LogoHeader } from '~/components/icons';

const LoadingPage = () => {
  return (
    <div className="h-screen w-full bg-light flex items-center justify-center dark:bg-dark text-textPrimaryLight dark:text-textPrimaryDark">
      <div className="flex flex-col items-center gap-2">
        <LogoHeader className={`rounded-full w-40 h-40`} />
        <AiOutlineLoading className={`rounded-full animate-spin w-10 h-10`} />
      </div>
    </div>
  );
};

export default LoadingPage;
