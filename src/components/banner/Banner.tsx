import Image from 'next/image';
import React, { FC } from 'react';
import BannerHeader from './BannerHeader';

const Banner: FC = () => {
  return (
    <div className="flex gap-10 items-center h-banner">
      <div className="h-full relative lg:basis-2/3">
        <Image
          src="/images/banner.png"
          fill
          className="w-full h-full object-scale-down"
          priority
          alt="Main banner"
        />
      </div>

      <BannerHeader />
    </div>
  );
};

export default Banner;
