import React, { useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import './lib.css';
const images = [
  `https://picsum.photos/id/1018/1000/600/`,
  'https://picsum.photos/id/1015/1000/600/',
  'https://picsum.photos/id/1019/1000/600/',
  'https://picsum.photos/id/1020/1000/600/',
  'https://picsum.photos/id/1021/1000/600/',
  'https://picsum.photos/id/1022/1000/600/',
  'https://picsum.photos/id/1023/1000/600/',
];

const GalleryImage = ({
  iamges = images,
  isOpen,
  setIsOpen,
  index = 0,
  title = '',
  caption = '',
}) => {
  const [photoIndex, setPhotoIndex] = useState(index);

  useEffect(() => {
    setPhotoIndex(index);
  }, [index]);

  return (
    <>
      {isOpen && (
        <Lightbox
          imageTitle={title}
          imageCaption={caption}
          mainSrc={iamges[photoIndex]}
          nextSrc={iamges[(photoIndex + 1) % images.length]}
          prevSrc={iamges[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </>
  );
};

export default GalleryImage;
