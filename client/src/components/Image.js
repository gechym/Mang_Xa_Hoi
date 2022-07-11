import { Avatar } from '@material-tailwind/react';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import useLazyImageLoading from '~/hooks/useLazyImageLoading';

function Image(
  { src, alt, className, fallBack: customFallback = images.noImage, ...props },
  ref,
) {
  const [fallBack, setFallBack] = useState('');

  const handleImageErr = () => {
    setFallBack(customFallback);
  };

  return (
    <Avatar
      className={`${className}`}
      {...props}
      src={fallBack || src || customFallback}
      alt={alt}
      ref={ref}
      onError={handleImageErr}
    />
  );
}

export default forwardRef(Image);

// import { Avatar } from '@material-tailwind/react';
// import { forwardRef, useState } from 'react';
// import images from '~/assets/images';
// import useLazyImageLoading from '~/hooks/useLazyImageLoading';

// function Image(
//   { src, alt, className, fallBack: customFallback = images.noImage, ...props },
//   ref,
// ) {
//   const [fallBack, setFallBack] = useState('');
//   const { ref: lazyRef } = useLazyImageLoading();

//   const handleImageErr = () => {
//     setFallBack(customFallback);
//   };

//   return (
//     <Avatar
//       className={`${className}`}
//       {...props}
//       alt={fallBack || src || customFallback}
//       ref={lazyRef}
//       onError={handleImageErr}
//       onLoad={() => {
//         setFallBack('');
//       }}
//     />
//   );
// }

// export default forwardRef(Image);
