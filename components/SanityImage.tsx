import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { getSanityImageConfig } from 'lib/sanity.client';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

interface Props {
  asset: SanityImageSource;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export const SanityImage = (props: Props) => {
  const { asset, alt, caption, width, height } = props;
  const imageProps = useNextSanityImage(getSanityImageConfig(), asset);

  if (!imageProps) return null;

  const imageStyle = {
    height: height || 'auto', // Use provided height or 'auto' if not provided
    objectFit: 'contain', // Apply object-fit: contain
  };

  return (
    <figure>
      <Image
        {...imageProps}
        alt={alt}
        width={width || imageProps.width}
        height={height || imageProps.height}
        style={imageStyle}
        sizes="(max-width: 800px) 100vw, 800px"
      />
      {caption && (
        <figcaption className="mt-2 text-center italic text-sm text-gray-500 dark:text-gray-400 text-pretty">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
