import React, { useState } from 'react';
import Image from '~/components/Image';
import GalleryImage from './GalleryImage';
import imagesFallBack from '~/assets/images';

const GalleryGirdImage = ({ images, ...passProp }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleOnclick = (index) => {
    console.log(index);
    setPhotoIndex(index);
    setIsOpen(true);
  };

  if (images?.length === 1) {
    return (
      <Image
        fallBack={imagesFallBack.imageError}
        className="!block cursor-pointer !w-full !h-auto rounded-sm"
        onClick={() => handleOnclick(0)}
        src={images[0]}
      />
    );
  }

  if (images?.length === 2) {
    return (
      <>
        <div className="grid grid-cols-2 grid-rows-[250px] gap-1">
          <Image
            fallBack={imagesFallBack.imageError}
            className="!block cursor-pointer !w-full !h-full rounded-sm"
            src={images[0]}
            onClick={() => handleOnclick(0)}
          />
          <Image
            fallBack={imagesFallBack.imageError}
            className="!block cursor-pointer !w-full !h-full rounded-sm"
            src={images[1]}
            onClick={() => handleOnclick(1)}
          />
        </div>
        <GalleryImage
          iamges={images}
          index={photoIndex}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          {...passProp}
        />
      </>
    );
  }

  if (images?.length === 3) {
    return (
      <div className="grid grid-cols-2 grid-rows-[300px_1fr] gap-1">
        <div className="col-start-1 col-end-3 ">
          <Image
            fallBack={imagesFallBack.imageError}
            className="!block cursor-pointer !w-full !h-full rounded-sm"
            src={images[0]}
            onClick={() => handleOnclick(0)}
          />
        </div>
        <Image
          fallBack={imagesFallBack.imageError}
          className="!block cursor-pointer !w-full !h-full rounded-sm"
          src={images[1]}
          onClick={() => handleOnclick(1)}
        />
        <Image
          fallBack={imagesFallBack.imageError}
          className="!block cursor-pointer !w-full !h-full rounded-sm"
          src={images[2]}
          onClick={() => handleOnclick(2)}
        />
        <GalleryImage
          iamges={images}
          index={photoIndex}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          {...passProp}
        />
      </div>
    );
  }

  if (images?.length === 4) {
    return (
      <div className="grid grid-cols-2 grid-rows-2 gap-1">
        <Image
          fallBack={imagesFallBack.imageError}
          className="!block cursor-pointer !w-full !h-full rounded-sm"
          src={images[0]}
          onClick={() => handleOnclick(0)}
        />
        <Image
          fallBack={imagesFallBack.imageError}
          className="!block cursor-pointer !w-full !h-full rounded-sm "
          src={images[1]}
          onClick={() => handleOnclick(1)}
        />
        <Image
          fallBack={imagesFallBack.imageError}
          className="!block cursor-pointer !w-full !h-full rounded-sm"
          src={images[2]}
          onClick={() => handleOnclick(2)}
        />
        <Image
          fallBack={imagesFallBack.imageError}
          className="!block cursor-pointer !w-full !h-full rounded-sm "
          src={images[3]}
          onClick={() => handleOnclick(3)}
        />
        <GalleryImage
          iamges={images}
          index={photoIndex}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          {...passProp}
        />
      </div>
    );
  }

  if (images?.length === 5) {
    return (
      <div className="grid grid-cols-[1.2fr_1fr] grid-rows-[minmax(300px,1fr)_minmax(150px,150px)] gap-1">
        <Image
          className="!block cursor-pointer !w-full !h-full rounded-sm"
          fallBack={imagesFallBack.imageError}
          onClick={() => handleOnclick(0)}
          src={images[0]}
        />
        <Image
          className="!block cursor-pointer !w-full !h-full rounded-sm "
          fallBack={imagesFallBack.imageError}
          onClick={() => handleOnclick(1)}
          src={images[1]}
        />
        <div className="col-start-1 col-end-3 grid grid-cols-3 grid-rows-[150px] gap-1 overflow-hidden">
          <Image
            className="!block cursor-pointer !w-full !h-full rounded-sm"
            fallBack={imagesFallBack.imageError}
            onClick={() => handleOnclick(2)}
            src={images[2]}
          />
          <Image
            className="!block cursor-pointer !w-full !h-full rounded-sm"
            fallBack={imagesFallBack.imageError}
            onClick={() => handleOnclick(3)}
            src={images[3]}
          />

          <Image
            className="!block cursor-pointer  !w-full !h-full rounded-sm"
            fallBack={imagesFallBack.imageError}
            onClick={() => handleOnclick(4)}
            src={images[4]}
          />
        </div>
        <GalleryImage
          iamges={images}
          index={photoIndex}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          {...passProp}
        />
      </div>
    );
  }

  if (images?.length >= 6) {
    return (
      <div className="grid grid-cols-[1.2fr_1fr] grid-rows-[minmax(300px,1fr)_minmax(150px,150px)] gap-1">
        <Image
          className="!block cursor-pointer !w-full !h-full rounded-sm"
          fallBack={imagesFallBack.imageError}
          onClick={() => handleOnclick(0)}
          src={images[0]}
        />
        <Image
          className="!block cursor-pointer !w-full !h-full rounded-sm "
          fallBack={imagesFallBack.imageError}
          onClick={() => handleOnclick(1)}
          src={images[1]}
        />
        <div className="col-start-1 col-end-3 grid grid-cols-3 grid-rows-[150px] gap-1 overflow-hidden">
          <Image
            className="!block cursor-pointer !w-full !h-full rounded-sm"
            fallBack={imagesFallBack.imageError}
            onClick={() => handleOnclick(2)}
            src={images[2]}
          />
          <Image
            className="!block cursor-pointer !w-full !h-full rounded-sm"
            fallBack={imagesFallBack.imageError}
            onClick={() => handleOnclick(3)}
            src={images[3]}
          />
          <div className="relative">
            <p
              onClick={() => handleOnclick(4)}
              className="z-10 absolute top-0 left-0 right-0 bottom-0 text-5xl font-medium text-white/70 cursor-pointer flex items-center justify-center bg-black/30"
            >
              {images.length - 4}+
            </p>
            <Image
              className="!block cursor-pointer  !w-full !h-full rounded-sm"
              fallBack={imagesFallBack.imageError}
              src={images[4]}
            />
          </div>
        </div>
        <GalleryImage
          iamges={images}
          index={photoIndex}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          {...passProp}
        />
      </div>
    );
  }

  return <div>GalleryGirdImage</div>;
};

export default GalleryGirdImage;
