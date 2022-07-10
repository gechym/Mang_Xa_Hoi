import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useInfiniteQuery } from 'react-query';

import { AiOutlineLoading } from 'react-icons/ai';
import 'react-loading-skeleton/dist/skeleton.css';

import WrapperResponsive from '~/layout/components/wrapperResponsive';
import { themeSelecter, userSelecter } from '~/redux/selecter';
import Post from '~/components/post';
import SkeletonPost from '~/components/SkeletonPost';
import { getDataInfinityQuery } from '~/api/postService';
import Button from '~/components/Button';
import useInview from '~/hooks/useInView';

function Home() {
  const theme = useSelector(themeSelecter);
  const { user } = useSelector(userSelecter);
  const { inView, ref } = useInview();

  // Quyrey for infinite scroll
  const key = user.id;
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    // isPreviousData,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: key,
    queryFn: getDataInfinityQuery,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.result < 5) {
        return undefined;
      }
      return pages.length + 1;
    },
    keepPreviousData: true,
    staleTime: 2000, // 5s for cache data when fetching next page (default: 0)
    cacheTime: 30 * 60 * 1000, // 30min for cache data (default: 0)
  });

  useEffect(() => {
    // infonity scroll
    if (inView && !isFetchingNextPage && hasNextPage) {
      console.log('fetchNextPage');
      fetchNextPage();
    }
  }, [inView, isFetchingNextPage, fetchNextPage]);

  const renderPost = useCallback(
    (posts) => {
      return posts.map((post, index) => {
        return (
          <WrapperResponsive key={index}>
            <Post post={post} />
          </WrapperResponsive>
        );
      });
    },
    [theme],
  );

  return (
    <div className="relative">
      {error && <div>{error.message}</div>}
      {/* 
      isFetching : true nêu bất cứ khi nào fetch dữ liệu kể cả khi dữ liệu trước đó đc cache lại
      isPreviousData : dữ liệu trước đó có được cache lại lại hay không  
      */}
      {isFetching && (
        <div className="text-center fixed z-20 top-16 left-0 right-0">
          {<Button icon={<AiOutlineLoading className="w-8 h-8 text-primary animate-spin" />} />}
        </div>
      )}
      {data &&
        data.pages.map((dataPage) => {
          return renderPost(dataPage.data.posts);
        })}
      {isFetching && (
        <>
          <WrapperResponsive>
            <SkeletonPost theme={theme} />
          </WrapperResponsive>
          <WrapperResponsive>
            <SkeletonPost theme={theme} />
          </WrapperResponsive>
        </>
      )}
      <div className="text-center">
        <Button className={`${!hasNextPage ? 'hidden' : ''} `} ref={ref} />
      </div>
    </div>
  );
}

export default Home;
