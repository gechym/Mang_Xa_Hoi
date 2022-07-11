import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import toast from 'react-hot-toast';
import { SunIcon, MoonIcon, MusicNoteIcon } from '@heroicons/react/solid';

import Button from '~/components/Button';
import Dropdown from '~/components/Dropdown';
import Menu from '~/components/Menu';
import { toggleTheme } from '~/redux/thunk/themeThunk';
import { pushToast } from '~/components/Notifications';
import Modal from '~/components/Modal';
import useUploadFile from '~/components/UploadFile';
import './test.css';

function TestComponent() {
  const dispatch = useDispatch();
  const { filesReview, renderUiUpload } = useUploadFile();

  console.log(filesReview);

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
      <Dropdown title={'dropdown'} className={''} />
      <Menu onChange={handleOnChang}>
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

      <Button type="button" onClick={openModal}>
        Open dialog
      </Button>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} titel="Hello Modal"></Modal>
      {renderUiUpload()}
    </div>
  );
}

export default TestComponent;
