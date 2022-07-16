import React from 'react';
import { Link } from 'react-router-dom';
import Header from '~/layout/components/Header';

const NotFound = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-light dark:bg-dark text-textPrimaryLight dark:text-textPrimaryDark">
      <Header />
      <p className="text-9xl font-extrabold text-textPrimaryLight dark:text-textPrimaryDark tracking-widest">404</p>
      <div className="bg-primary px-2 text-sm rounded rotate-12 absolute">Page Not Found</div>
      <button className="mt-5">
        <span className="relative inline-block text-sm font-medium text-primary group active:bg-primary/500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-primary group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <Link to="/">Go Home</Link>
          </span>
        </span>
      </button>
    </main>
  );
};

export default NotFound;
