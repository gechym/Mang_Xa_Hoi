import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import { FaRegCommentAlt } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';
import { AiOutlineLike } from 'react-icons/ai';
import FbImageLibrary from '@joelfernando06/react-fb-image-grid';
import { FcSms } from 'react-icons/fc';

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

import moment from 'moment';
import localization from 'moment/locale/vi';
moment.updateLocale('vi', localization);

const Post = ({ post }) => {
  return (
    <>
      <div className="pt-3 px-3 flex items-center gap-2">
        <Image
          className="w-[38px] h-[38px] rounded-full cursor-pointer ring-2 ring-primary"
          src={post.userAvatarPosst}
        />
        <div>
          <h1 className="text-sm font-bold text-textPrimaryLight dark:text-textPrimaryDark ">
            {post.userPost}
          </h1>
          <p className="text-xs font-normal text-textSecondaryLight dark:text-textSecondaryDark">
            {moment(post.createdAt).fromNow()} 🌏{' '}
            {new Date(post.createdAt).toLocaleString('vn-vi', {
              hour12: false,
              timeStyle: 'short',
              dateStyle: 'short',
            })}
          </p>
        </div>
      </div>
      <p className="text-sm text-inherit py-2 px-3">
        <span className="bg-primary p-[2px] rounded-lg">#{post.postId}</span>
        {post.contentPost}
      </p>

      {post.imagesPost && (
        <FbImageLibrary
          className="cursor-pointer"
          hideOverlay
          renderOverlay={() => <button>Show Image</button>}
          overlayBackgroundColor="rgba(0,0,0,0.5)"
          images={post.imagesPost ? post.imagesPost : []}
        />
      )}

      <div className="flex justify-between py-3 mx-3  border-b-2 border-[#ced0d4] dark:border-[#3e4042]">
        <div className="flex items-center">
          <LikeIcon />
          <HahaIcon />
          <LoveIcon />
          <AngryIcon />
          <SadIcon />
          <WowIcon />
          <DearIcon />
          <span className="text-sm ml-1 text-textSecondaryLight dark:text-textSecondaryDark">
            {post.likesPost?.length}
          </span>
        </div>

        <span className="text-sm flex items-center text-textSecondaryLight dark:text-textSecondaryDark">
          {post.CommentPosts.length} <FcSms className="ml-1 w-4 h-4" />
        </span>
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
