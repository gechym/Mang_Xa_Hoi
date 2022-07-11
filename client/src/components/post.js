import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import { FaRegCommentAlt } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';
import { AiOutlineLike } from 'react-icons/ai';
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
      <p className="text-sm text-inherit py-3 px-3">
        <span className="bg-primary p-[2px] rounded-lg">#{post.postId}</span>
        {post.contentPost}
      </p>
      <div className="grid grid-cols-2 grid-rows-1 gap-1">
        <Image
          className="!block !w-full !h-full rounded-sm"
          src={
            'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/292069686_2617551351711184_6772733467504329972_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=v4t4aVeOGiEAX_8w3Gh&tn=KTPC1_mtkk8H_1Zz&_nc_ht=scontent.fdad3-1.fna&oh=00_AT-UN70DNJ_cYvy3JLeWBx0ybxW7Upb3ntnsoXbxmWcIOw&oe=62CEE63D'
          }
        />
        <Image
          className="!block !w-full !h-full rounded-sm "
          src={
            'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/292069686_2617551351711184_6772733467504329972_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=v4t4aVeOGiEAX_8w3Gh&tn=KTPC1_mtkk8H_1Zz&_nc_ht=scontent.fdad3-1.fna&oh=00_AT-UN70DNJ_cYvy3JLeWBx0ybxW7Upb3ntnsoXbxmWcIOw&oe=62CEE63D'
          }
        />
      </div>
      {/*//3 ảnh
      <div className="grid grid-cols-2 grid-rows-[300px_1fr] gap-1">
        <div className="col-start-1 col-end-3 ">
          <Image
            className="!block !w-full !h-full rounded-sm"
            src={
              'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/292069686_2617551351711184_6772733467504329972_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=v4t4aVeOGiEAX_8w3Gh&tn=KTPC1_mtkk8H_1Zz&_nc_ht=scontent.fdad3-1.fna&oh=00_AT-UN70DNJ_cYvy3JLeWBx0ybxW7Upb3ntnsoXbxmWcIOw&oe=62CEE63D'
            }
          />
        </div>
        <Image
          className="!block !w-full !h-full rounded-sm"
          src={
            'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/292069686_2617551351711184_6772733467504329972_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=v4t4aVeOGiEAX_8w3Gh&tn=KTPC1_mtkk8H_1Zz&_nc_ht=scontent.fdad3-1.fna&oh=00_AT-UN70DNJ_cYvy3JLeWBx0ybxW7Upb3ntnsoXbxmWcIOw&oe=62CEE63D'
          }
        />
        <Image
          className="!block !w-full !h-full rounded-sm"
          src={
            'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/292069686_2617551351711184_6772733467504329972_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=v4t4aVeOGiEAX_8w3Gh&tn=KTPC1_mtkk8H_1Zz&_nc_ht=scontent.fdad3-1.fna&oh=00_AT-UN70DNJ_cYvy3JLeWBx0ybxW7Upb3ntnsoXbxmWcIOw&oe=62CEE63D'
          }
        />
      </div>
      // 4 ảnh
      <div className="grid grid-cols-2 grid-rows-2 gap-1">
        <Image
          className="!block !w-full !h-full rounded-sm"
          src={
            'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/292069686_2617551351711184_6772733467504329972_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=v4t4aVeOGiEAX_8w3Gh&tn=KTPC1_mtkk8H_1Zz&_nc_ht=scontent.fdad3-1.fna&oh=00_AT-UN70DNJ_cYvy3JLeWBx0ybxW7Upb3ntnsoXbxmWcIOw&oe=62CEE63D'
          }
        />
        <Image
          className="!block !w-full !h-full rounded-sm "
          src={
            'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/292069686_2617551351711184_6772733467504329972_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=v4t4aVeOGiEAX_8w3Gh&tn=KTPC1_mtkk8H_1Zz&_nc_ht=scontent.fdad3-1.fna&oh=00_AT-UN70DNJ_cYvy3JLeWBx0ybxW7Upb3ntnsoXbxmWcIOw&oe=62CEE63D'
          }
        />
        <Image
          className="!block !w-full !h-full rounded-sm"
          src={
            'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/292069686_2617551351711184_6772733467504329972_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=v4t4aVeOGiEAX_8w3Gh&tn=KTPC1_mtkk8H_1Zz&_nc_ht=scontent.fdad3-1.fna&oh=00_AT-UN70DNJ_cYvy3JLeWBx0ybxW7Upb3ntnsoXbxmWcIOw&oe=62CEE63D'
          }
        />
        <Image
          className="!block !w-full !h-full rounded-sm "
          src={
            'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/292069686_2617551351711184_6772733467504329972_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=v4t4aVeOGiEAX_8w3Gh&tn=KTPC1_mtkk8H_1Zz&_nc_ht=scontent.fdad3-1.fna&oh=00_AT-UN70DNJ_cYvy3JLeWBx0ybxW7Upb3ntnsoXbxmWcIOw&oe=62CEE63D'
          }
        />
      </div>
      // 5 ảnh trở lên
      <div className="grid grid-cols-[1.2fr_1fr] grid-rows-[1fr_minmax(150px,150px)] gap-1">
        <Image
          className="!block !w-full !h-full rounded-sm"
          src={
            'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/292069686_2617551351711184_6772733467504329972_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=v4t4aVeOGiEAX_8w3Gh&tn=KTPC1_mtkk8H_1Zz&_nc_ht=scontent.fdad3-1.fna&oh=00_AT-UN70DNJ_cYvy3JLeWBx0ybxW7Upb3ntnsoXbxmWcIOw&oe=62CEE63D'
          }
        />
        <Image
          className="!block !w-full !h-full rounded-sm "
          src={
            'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/292069686_2617551351711184_6772733467504329972_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=v4t4aVeOGiEAX_8w3Gh&tn=KTPC1_mtkk8H_1Zz&_nc_ht=scontent.fdad3-1.fna&oh=00_AT-UN70DNJ_cYvy3JLeWBx0ybxW7Upb3ntnsoXbxmWcIOw&oe=62CEE63D'
          }
        />
        <div className="col-start-1 col-end-3 grid grid-cols-3 grid-rows-[150px] gap-1 overflow-hidden">
          <Image
            className="!block !w-full !h-full rounded-sm"
            src={
              'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/292069686_2617551351711184_6772733467504329972_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=v4t4aVeOGiEAX_8w3Gh&tn=KTPC1_mtkk8H_1Zz&_nc_ht=scontent.fdad3-1.fna&oh=00_AT-UN70DNJ_cYvy3JLeWBx0ybxW7Upb3ntnsoXbxmWcIOw&oe=62CEE63D'
            }
          />
          <Image
            className="!block !w-full !h-full rounded-sm"
            src={
              'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/292069686_2617551351711184_6772733467504329972_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=v4t4aVeOGiEAX_8w3Gh&tn=KTPC1_mtkk8H_1Zz&_nc_ht=scontent.fdad3-1.fna&oh=00_AT-UN70DNJ_cYvy3JLeWBx0ybxW7Upb3ntnsoXbxmWcIOw&oe=62CEE63D'
            }
          />
          <Image
            className="!block !w-full !h-full rounded-sm"
            src={
              'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/292069686_2617551351711184_6772733467504329972_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=v4t4aVeOGiEAX_8w3Gh&tn=KTPC1_mtkk8H_1Zz&_nc_ht=scontent.fdad3-1.fna&oh=00_AT-UN70DNJ_cYvy3JLeWBx0ybxW7Upb3ntnsoXbxmWcIOw&oe=62CEE63D'
            }
          />

          <Image
            className="!block !w-full !h-full rounded-sm"
            src={
              'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/292069686_2617551351711184_6772733467504329972_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=v4t4aVeOGiEAX_8w3Gh&tn=KTPC1_mtkk8H_1Zz&_nc_ht=scontent.fdad3-1.fna&oh=00_AT-UN70DNJ_cYvy3JLeWBx0ybxW7Upb3ntnsoXbxmWcIOw&oe=62CEE63D'
            }
          />
          <Image
            className="!block !w-full !h-full rounded-sm"
            src={
              'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/292069686_2617551351711184_6772733467504329972_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=v4t4aVeOGiEAX_8w3Gh&tn=KTPC1_mtkk8H_1Zz&_nc_ht=scontent.fdad3-1.fna&oh=00_AT-UN70DNJ_cYvy3JLeWBx0ybxW7Upb3ntnsoXbxmWcIOw&oe=62CEE63D'
            }
          />
        </div>
      </div> */}
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
