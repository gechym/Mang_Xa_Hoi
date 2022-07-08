import { useSelector } from 'react-redux';
import 'react-loading-skeleton/dist/skeleton.css';
import WrapperResponsive from '~/layout/components/wrapperResponsive';
import Post from '~/components/post';
import SkeletonPost from '~/components/SkeletonPost';
import { useEffect, useState } from 'react';

function Home() {
  const [loading, setLoading] = useState(false);
  const theme = useSelector((state) => state.themeState);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

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
