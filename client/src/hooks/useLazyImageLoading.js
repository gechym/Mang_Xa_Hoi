import { useEffect } from 'react';
import useInview from './useInView';

function useImageLazyLoading() {
  const { ref, inView } = useInview();
  useEffect(() => {
    const img = ref.current;

    if (inView) {
      img.setAttribute('src', img.alt);

      img.classList.add('opacity-1');
    }
  }, [inView, ref]);

  return { ref };
}

export default useImageLazyLoading;
