import { toggleTheme } from '~/redux/thunk/themeThunk';
import Button from '~/components/Button';
import { BsSun } from 'react-icons/bs';
import WrapperResponsive from '~/layout/components/wrapperResponsive';
import { useDispatch } from 'react-redux';

function Home() {
  const dispatch = useDispatch();
  return (
    <div>
      <WrapperResponsive>
        <Button
          icon={<BsSun />}
          onClick={() => {
            dispatch(toggleTheme());
          }}
        />
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
