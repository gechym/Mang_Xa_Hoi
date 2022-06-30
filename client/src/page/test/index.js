import { useSelector } from 'react-redux';
import { themeSelecter } from '~/redux/selecter';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '~/redux/thunk/themeThunk';
import Button from '~/components/Button';
import { BellIcon } from '@heroicons/react/solid';

function TestComponent() {
  const theme = useSelector(themeSelecter);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const classTheme = (theme) => {
    if (theme === 'dark') {
      return 'dark:bg-dark dark:text-textPrimaryDark';
    } else {
      return 'bg-light text-textPrimaryLight';
    }
  };

  return (
    <div className={`min-h-screen ${classTheme(theme)}`}>
      <h1>{theme}</h1>
      <Button
        onClick={handleToggleTheme}
        small
        target="_blank"
        leftIcon={<BellIcon className="h-4 w-4" />}
        className={'bg-cyan-900'}
      >
        Button
      </Button>
      <Button
        href={'/cc'}
        medium
        target="_blank"
        leftIcon={<BellIcon className="h-4 w-4" />}
        className={'bg-cyan-900'}
      >
        Button
      </Button>
      <Button
        onClick={() => {
          alert('click');
        }}
        large
        outline
        rightIcon={<BellIcon className="h-4 w-4" />}
      >
        Button
      </Button>
    </div>
  );
}

export default TestComponent;
