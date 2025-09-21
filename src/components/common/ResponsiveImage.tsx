'use client';

import Image from 'next/image';
import { ImageConfig, ImageType } from '@/config/image';
import { useState } from 'react';
import clsx from 'clsx';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  type: ImageType;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  fill?: boolean;
}

export default function ResponsiveImage({
  src,
  alt,
  type,
  priority = false,
  className = '',
  containerClassName = '',
  fill = false,
}: ResponsiveImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const config = ImageConfig[type];

  // 处理图片加载完成
  const handleLoad = () => {
    setIsLoading(false);
  };

  // 处理图片加载失败
  const handleError = () => {
    setIsLoading(false);
    // 可以在这里添加错误处理逻辑，比如显示默认图片
  };

  if (fill) {
    return (
      <div className={clsx('relative overflow-hidden', containerClassName)}>
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={clsx(
            'object-cover duration-300 ease-in-out relative',
            isLoading ? 'scale-105 blur-sm opacity-0' : 'scale-100 blur-0 opacity-100',
            className
          )}
          onLoad={handleLoad}
          onError={handleError}
          sizes="100vw"
          quality={90}
          style={{ objectFit: 'cover' }}
        />
      </div>
    );
  }

  return (
    <div
      className={clsx(
        'relative overflow-hidden',
        containerClassName
      )}
      style={{ aspectRatio: config.aspectRatio }}
    >
      <Image
        src={src}
        alt={alt}
        width={config.width}
        height={config.height}
        priority={priority}
        className={clsx(
          'object-cover duration-700 ease-in-out',
          isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0',
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}