import { useSelector } from 'react-redux';
import 'react-loading-skeleton/dist/skeleton.css';
import WrapperResponsive from '~/layout/components/wrapperResponsive';
import { themeSelecter, userSelecter } from '~/redux/selecter';
import Post from '~/components/post';
import SkeletonPost from '~/components/SkeletonPost';
import { useEffect, useState } from 'react';

function Home() {
  const [loading, setLoading] = useState(false);
  const theme = useSelector(themeSelecter);
  const { user, userInfo } = useSelector(userSelecter);

  useEffect(() => {
    console.log(user, userInfo);

    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, [user, userInfo]);

  return (
    <div>
      <WrapperResponsive>{loading ? <Post /> : <SkeletonPost theme={theme} />}</WrapperResponsive>
      <WrapperResponsive>{loading ? <Post /> : <SkeletonPost theme={theme} />}</WrapperResponsive>
      <WrapperResponsive>{loading ? <Post /> : <SkeletonPost theme={theme} />}</WrapperResponsive>
      <WrapperResponsive>{loading ? <Post /> : <SkeletonPost theme={theme} />}</WrapperResponsive>
      <WrapperResponsive>{loading ? <Post /> : <SkeletonPost theme={theme} />}</WrapperResponsive>
      <WrapperResponsive>{loading ? <Post /> : <SkeletonPost theme={theme} />}</WrapperResponsive>
      <WrapperResponsive>{loading ? <Post /> : <SkeletonPost theme={theme} />}</WrapperResponsive>
    </div>
  );
}

export default Home;
