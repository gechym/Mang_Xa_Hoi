import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import { FaRegCommentAlt } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';
import { AiOutlineLike } from 'react-icons/ai';

import Button from '~/components/Button';
import Image from '~/components/Image';
import {
  HahaIcon,
  LikeIcon,
  LoveIcon,
  AngryIcon,
  SadIcon,
  WowIcon,
  DearIcon,
} from '~/layout/components/iconReact';

const Post = () => {
  return (
    <>
      <div className="pt-3 px-3 flex items-center gap-2">
        <Image
          className="w-[38px] h-[38px] rounded-full cursor-pointer ring-2 ring-primary"
          src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/194808274_1386494815059778_930409726896657162_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mTUS3kpoI3sAX-dJF2x&_nc_ht=scontent.fdad3-4.fna&oh=00_AT-psm3nI0fJTxDpDhXOwPa1rc4mCO58fCgl8iLJkoL19g&oe=62EB7E4E"
        />
        <div>
          <h1 className="text-sm font-bold text-textPrimaryLight dark:text-textPrimaryDark ">
            Nguyễn Đức Bảo
          </h1>
          <p className="text-xs font-normal text-textSecondaryLight dark:text-textSecondaryDark">
            4 tháng 7 lúc 12:12🌎
          </p>
        </div>
      </div>
      <p className="text-sm text-inherit py-2 px-3">
        Dùng keyframe vs animation cho scss thì css thuần nhanh và ko phức tạp như scss. Ko biết quan điểm
        mình có đúng hay do mình gà scss nhỉ mn? P/s: Ai giúp mình gộp đống keyframe và animation(trong hình)
        qua scss với. Cảm ơn mn!!
      </p>
      <img
        className="object-cover"
        src="https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/292199586_574081037634590_6647433652060029008_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=q8Ma_3CLu-sAX_JpuUK&_nc_ht=scontent.fdad3-3.fna&oh=00_AT8UaC25S0j28qGdko9bEYQc3JeUxr1P7ZyDmpH5zyGYtg&oe=62CB4685"
      />

      <div className="flex justify-between py-3 mx-3  border-b-2 border-[#ced0d4] dark:border-[#3e4042]">
        <div className="flex items-center">
          <LikeIcon />
          <HahaIcon />
          <LoveIcon />
          <AngryIcon />
          <SadIcon />
          <WowIcon />
          <DearIcon />
          <span className="text-sm ml-1 text-textSecondaryLight dark:text-textSecondaryDark">3,5k</span>
        </div>

        <span className="text-sm text-textSecondaryLight dark:text-textSecondaryDark">123 bình luận</span>
      </div>
      <div className="flex p-1 ">
        <Button
          className="flex-1  h-8 p-0 m-0 text-textSecondaryLight dark:text-textSecondaryDark bg-lightSecondary hover:bg-[#F2F2F2] dark:bg-darkSecondary"
          leftIcon={<AiOutlineLike />}
        >
          Like
        </Button>
        <Button
          className="flex-1 h-8 p-0 m-0 text-textSecondaryLight dark:text-textSecondaryDark bg-lightSecondary hover:bg-[#F2F2F2] dark:bg-darkSecondary"
          leftIcon={<FaRegCommentAlt />}
        >
          Comment
        </Button>
        <Button
          className="flex-1 h-8 p-0 m-0 text-textSecondaryLight dark:text-textSecondaryDark bg-lightSecondary hover:bg-[#F2F2F2] dark:bg-darkSecondary"
          leftIcon={<RiShareForwardLine />}
        >
          Share
        </Button>
      </div>
    </>
  );
};

export default Post;
