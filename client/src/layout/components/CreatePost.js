import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { userSelecter } from '~/redux/selecter';

import { IconEmoji, IconLive, IconPicture } from '~/components/icons';

import Button from '~/components/Button';
import Modal from '~/components/Modal';
import Image from '~/components/Image';
import Dropdown from '~/components/Dropdown';
import { FaLock, FaUserFriends } from 'react-icons/fa';
import { MdPublic } from 'react-icons/md';

const CreatePost = () => {
  const { userInfo } = useSelector(userSelecter);
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState({ lable: 'Public', icon: <MdPublic /> });

  const itemDefault = [
    // { lable: 'Chỉ mình tôi', icon: LoginIcon, to: '/login' },
    // { lable: 'Home', icon: HomeIcon, href: '/home', target: '_blank' },
    {
      lable: 'Public',
      icon: MdPublic,
      onClick: () => {
        setStatus({ lable: 'Public', icon: <MdPublic /> });
      },
    },
    {
      lable: 'Private',
      icon: FaLock,
      onClick: () => {
        setStatus({ lable: 'Private', icon: <FaLock /> });
      },
    },
    {
      lable: 'Friends',
      icon: FaUserFriends,
      onClick: () => {
        setStatus({ lable: 'Friends', icon: <FaUserFriends /> });
      },
    },
  ];

  return (
    <div className="py-2 px-3 ">
      <div className="flex justify-center items-center">
        <Image className="bg-blue-grey-300 !w-10 !h-10 rounded-full" src={userInfo?.avatar} />
        <Button
          onClick={() => setIsOpen(true)}
          className="block w-full text-[#606266] rounded-full !bg-light dark:!bg-darkBtn hover:!bg-lightHoverIcon dark:hover:!bg-darkHoverIcon"
        >
          Bạn đang nghĩ gì thế 🐧🐧
        </Button>
      </div>
      <div className="mt-3 flex justify-center items-center gap-2 ">
        <Button
          className={'p-0 m-0 flex-1 !bg-transparent hover:!bg-lightHoverIcon dark:hover:!bg-darkHoverIcon'}
          leftIcon={<IconLive className={`w-5 h5 fill-[#F3425F]`} />}
        >
          Video trực tiếp
        </Button>
        <Button
          className={'p-0 m-0 flex-1 !bg-transparent hover:!bg-lightHoverIcon dark:hover:!bg-darkHoverIcon'}
          leftIcon={<IconPicture className={`w-5 h5 fill-[#58C472]`} />}
        >
          Ảnh/video
        </Button>
        <Button
          className={'p-0 m-0 flex-1 !bg-transparent hover:!bg-lightHoverIcon dark:hover:!bg-darkHoverIcon'}
          leftIcon={<IconEmoji className={`w-5 h5 fill-[#F7B928]`} />}
        >
          Emoji
        </Button>
      </div>
      <Modal
        className="w-[550px] max-w-[70vw] border-t border-[#ced0d4] dark:border-[#3e4042]"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        titel="Bài đăng mới 📣"
      >
        <div className="mt-2 flex gap-2 items-center">
          <Image className="bg-blue-grey-300 !w-10 !h-10 rounded-full" src={userInfo?.avatar} />
          <div>
            <h1 className="text-sm font-semibold">{userInfo.name}</h1>
            <Dropdown items={itemDefault} classNameItem={'!left-0'}>
              <Button leftIcon={status.icon} className="py-[1px] text-sm rounded-lg m-0">
                {status.lable}
              </Button>
            </Dropdown>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreatePost;
