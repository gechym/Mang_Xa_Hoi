import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonPost = ({ theme }) => {
  return (
    <SkeletonTheme
      baseColor={theme === 'dark' ? '#2B2C2D' : '#F8F9FA'}
      highlightColor={theme === 'dark' ? '#444' : '#EAECEF'}
    >
      <div className="p-3">
        <div className="flex gap-2">
          <div className="w-10 h-10">
            <Skeleton circle height="100%" />
          </div>
          <div className="mt-1">
            <Skeleton height={10} width={80} count={1} />
            <Skeleton height={10} width={60} count={1} />
          </div>
        </div>
        <Skeleton height={10} width={'30%'} count={1} />
        <Skeleton height={10} width={'100%'} count={3} />
        <Skeleton height={200} width={'100%'} count={1} />
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonPost;
