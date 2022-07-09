import React, { useEffect, useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { LogoHeader } from '~/components/icons';
import LoadingBar from 'react-top-loading-bar';

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(progress + 90);
  }, []);

  return (
    <div className="h-screen w-full animate-bgGradient bg-light flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-500 dark:text-textPrimaryDark">
      <LoadingBar color={'#1b74e4'} progress={progress} onLoaderFinished={() => setProgress(0)} />
      <div className="flex flex-col items-center gap-2">
        <LogoHeader className={`rounded-full w-40 h-40`} />
        <AiOutlineLoading className={`rounded-full animate-spin w-10 h-10`} />
      </div>
    </div>
  );
};

export default LoadingPage;
