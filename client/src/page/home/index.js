import { toggleTheme } from '~/redux/thunk/themeThunk';
import Button from '~/components/Button';
import { BsSun } from 'react-icons/bs';
import WrapperResponsive from '~/layout/components/wrapperResponsive';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Home() {
  const theme = useSelector((state) => state.themeState);
  const dispatch = useDispatch();
  return (
    <div>
      <WrapperResponsive>
        <SkeletonTheme
          baseColor={theme === 'dark' ? '#2B2C2D' : '#F8F9FA'}
          highlightColor={theme === 'dark' ? '#444' : '#EAECEF'}
        >
          <div className="">
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
            <Skeleton height={10} width={'100%'} count={4} />
          </div>
        </SkeletonTheme>
      </WrapperResponsive>

      <WrapperResponsive>
        <Button
          icon={<BsSun />}
          onClick={() => {
            dispatch(toggleTheme());
          }}
        />
      </WrapperResponsive>
    </div>
  );
}

export default Home;
