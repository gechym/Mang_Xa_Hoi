import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInfiniteQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { AiOutlineLoading } from 'react-icons/ai';
import 'react-loading-skeleton/dist/skeleton.css';

import WrapperResponsive from '~/layout/components/wrapperResponsive';
import { themeSelecter, userSelecter } from '~/redux/selecter';
import Post from '~/layout/components/post';
import SkeletonPost from '~/layout/components/SkeletonPost';
import { getDataInfinityQuery } from '~/api/postService';
import Button from '~/components/Button';
import useInview from '~/hooks/useInView';
import CreatePost from '~/layout/components/CreatePost';

function Home() {
  const theme = useSelector(themeSelecter);
  const { user, userInfo, error: errorUserReducer } = useSelector(userSelecter);
  const { inView, ref } = useInview();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // Query for infinite scroll
  const key = user.id;
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery({
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
    if (inView && !isFetchingNextPage && hasNextPage && !errorUserReducer && !error?.message) {
      console.log('fetchNextPage');
      fetchNextPage();
    }
  }, [inView, isFetchingNextPage, fetchNextPage, errorUserReducer, error?.message]);

  // useEffect(() => {
  //   if (error?.message.includes('Bạn đã đổi password ngày')) {
  //     navigate('/login');
  //     dispatch(logoutUser());
  //     toast(error?.message, {
  //       icon: '🚧',
  //     });
  //     error.message = '';
  //   }
  // }, [error?.message]);

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
  // isFetching : true nêu bất cứ khi nào fetch dữ liệu kể cả khi dữ liệu trước đó đc cache lại
  // isPreviousData : dữ liệu trước đó có được cache lại lại hay không
  return (
    <div className="relative">
      {error && <div>{error.message}</div>}
      {errorUserReducer}
      <WrapperResponsive>
        <CreatePost />
      </WrapperResponsive>

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
