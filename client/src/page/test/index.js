import { useCallback, useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';

import toast from 'react-hot-toast';
import {
  SunIcon,
  AnnotationIcon,
  HomeIcon,
  SearchIcon,
  MoonIcon,
  MusicNoteIcon,
  LoginIcon,
} from '@heroicons/react/solid';

import Button from '~/components/Button';
import Dropdown from '~/components/Dropdown';
import Menu from '~/components/Menu';
import { toggleTheme } from '~/redux/thunk/themeThunk';
import { pushToast } from '~/components/Notifications';
import Modal from '~/components/Modal';

function TestComponent() {
  const dispatch = useDispatch();

  const [menuItem] = useState([
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
  ]);
  const [items] = useState([
    { lable: 'Login', icon: LoginIcon, to: '/login' },
    { lable: 'Home', icon: HomeIcon, href: '/home', target: '_blank' },
    {
      lable: 'anno',
      icon: AnnotationIcon,
      onClick: () => {
        alert('hello');
      },
    },
  ]);
  const handleToggleTheme = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  const handleOnChang = useCallback((item) => {
    switch (item.type) {
      case 'language':
        alert('Đổi ngôn ngữ');
        break;

      default:
        break;
    }
  }, []);

  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className={`min-h-screen p-2 bg-light text-textPrimaryLight dark:bg-dark dark:text-textPrimaryDark`}>
      <Dropdown items={items} title={'dropdown'} className={''} />
      <Menu items={menuItem} onChange={handleOnChang}>
        <Button icon={<MoonIcon className="w-5 h-5" />}></Button>
      </Menu>
      <Button leftIcon={<SunIcon className="w-5 h-5" />} onClick={handleToggleTheme}>
        MoonIcon
      </Button>

      <Button
        leftIcon={<MusicNoteIcon className="animate-bounce  w-5 h-5" />}
        onClick={() =>
          pushToast(
            'Bạn vừa nhận mời tin nhắn từ Nguyễn Đức Bảo',
            'https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/194808274_1386494815059778_930409726896657162_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9ilBJZa790oAX80mCeq&_nc_ht=scontent.fdad3-4.fna&oh=00_AT8AovGgjG7weDLxNnW5kV361dU2AdaAs6JE0kK4LGGA4w&oe=62E3954E',
            '/@nguyenducbao',
          )
        }
      >
        ToastNotification
      </Button>

      <Button
        onClick={() => {
          toast('Hello World');
          toast.error('This is an error!');
          toast.success('Successfully created!');
        }}
      >
        loading
      </Button>

      <>
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={openModal}
            className="
            rounded-md bg-lightBtn dark:bg-darkBtn text-textPrimaryLight dark:text-textPrimaryDark
            hover:bg-lightHoverIcon dark:hover:bg-darkHoverIcon  px-4 py-2 text-sm font-medium
            "
          >
            Open dialog
          </button>
        </div>

        <Modal isOpen={isOpen} setIsOpen={setIsOpen} titel="Hello Modal">
          <h1>Hello</h1>
        </Modal>
      </>
    </div>
  );
}

export default TestComponent;
