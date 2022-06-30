import { useSelector } from 'react-redux';
import { themeSelecter } from '~/redux/selecter';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '~/redux/thunk/themeThunk';
import Button from '~/components/Button';
import {
  SunIcon,
  AnnotationIcon,
  HomeIcon,
  SearchIcon,
  MoonIcon,
  ArrowDownIcon,
} from '@heroicons/react/solid';
import Dropdown from '~/components/Dropdown';
import Menu from '~/components/Menu';

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
  const menuItem = [
    {
      icon: <SearchIcon className="h-5 w-5" />,
      title: 'English',
      children: {
        title: 'Language',
        data: [
          {
            type: 'language',
            code: 'en',
            title: 'english',
            icon: <SearchIcon className="h-5 w-5" />,
            to: '/language',
          },
          {
            type: 'language',
            code: 'vi',
            title: 'việt nam',
            icon: <SearchIcon className="h-5 w-5" />,
            href: '/language',
          },
          {
            type: 'language',
            code: 'en',
            title: 'english',
            icon: <SearchIcon className="h-5 w-5" />,
            to: '/language',
          },
          {
            title: 'Menu cấp 3',
            icon: <SearchIcon className="h-5 w-5" />,
            separate: true,
            children: {
              title: 'Menu 3',
              data: [
                {
                  type: 'language',
                  code: 'en',
                  title: 'english',
                  icon: <SearchIcon className="h-5 w-5" />,
                  to: '/language',
                },
              ],
            },
          },
        ],
      },
    },
    {
      icon: <SearchIcon className="h-5 w-5" />,
      title: 'Keyboard shortcuts',
      to: '/upload',
    },
    {
      icon: <SearchIcon className="h-5 w-5" />,
      title: 'Feedback and help',
      to: '/following',
    },
  ];
  const items = [
    { lable: 'Search', icon: SearchIcon, to: '/search' },
    { lable: 'Home', icon: HomeIcon, href: '/home', target: '_blank' },
    {
      lable: 'anno',
      icon: AnnotationIcon,
      onClick: () => {
        alert('hello');
      },
    },
  ];

  const handleOnChang = (item) => {
    switch (item.type) {
      case 'language':
        alert('Đổi ngôn ngữ');
        break;

      default:
        break;
    }
  };

  return (
    <div className={`min-h-screen p-2 ${classTheme(theme)}`}>
      <Dropdown items={items} />
      <Button icon={<MoonIcon className="w-5 h-5" />} onClick={handleToggleTheme}></Button>
      <Button leftIcon={<SunIcon className="w-5 h-5" />} onClick={handleToggleTheme}>
        MoonIcon
      </Button>
      <Button leftIcon={<SunIcon className="animate-spin w-5 h-5" />} outline onClick={handleToggleTheme}>
        MoonIcon
      </Button>
      <Button leftIcon={<ArrowDownIcon className="animate-bounce  w-4 h-4" />} onClick={handleToggleTheme}>
        MoonIcon
      </Button>

      <Menu items={menuItem} onChange={handleOnChang}>
        <Button icon={<MoonIcon className="w-5 h-5" />}></Button>
      </Menu>
    </div>
  );
}

export default TestComponent;
