import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';

function ImageLazy(
  { src, alt, className, fallBack: customFallback = images.noImage, ...props },
  ref,
) {
  const [fallBack, setFallBack] = useState('');

  const handleImageErr = () => {
    setFallBack(customFallback);
  };

  return (
    <>
      <LazyLoadImage
        className={`inline-block relative object-cover object-center w-12 h-12 rounded-lg ${className}`}
        effect="blur"
        height={'100%'}
        alt={alt}
        src={src}
        onError={handleImageErr}
        {...props}
      />
    </>
  );
}

export default forwardRef(ImageLazy);
