import Image, { StaticImageData } from 'next/image';
import { FC, useEffect, useState } from 'react';

type Props = {
  imgSrcObj: {
    webp: StaticImageData;
    png: StaticImageData;
  };
  width: number;
  height: number;
};

const CustomImage: FC<Props> = ({ imgSrcObj, width, height }) => {
  const [imageSrc, setImageSrc] = useState(imgSrcObj.png); // Default to PNG

  useEffect(() => {
    // Check for WebP support after hydration
    const supportsWebP = () => {
      const canvas = document.createElement('canvas');
      return canvas.getContext && canvas.getContext('2d')
        ? canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
        : false;
    };

    if (supportsWebP()) {
      setImageSrc(imgSrcObj.webp);
    }
  }, []);

  return (
    <Image
      src={imageSrc}
      alt='Client Logo'
      width={width}
      height={height}
      loading='lazy'
    />
  );
};

export default CustomImage;
