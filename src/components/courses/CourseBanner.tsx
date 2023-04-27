import Image from 'next/image';
import React, { FC } from 'react';
import Container from '../layouts/Container';
import { applyGoldClassToFirstWord } from '@/utils/parseUtils';
import { Rating } from '@mui/material';

interface CourseBannerProps {
  img: string;
  title: string;
  short_description: string;
  difficulty: number;
}

const CourseBanner: FC<CourseBannerProps> = ({ img, title, short_description, difficulty }) => {
  const coloredTitle = applyGoldClassToFirstWord(title);

  return (
    <Container>
      <div className="flex sm:flex-col items-center gap-10">
        <div className="relative h-banner sm:h-[400px] lg:w-1/2 sm:w-full rounded-md overflow-hidden">
          <Image src={img} alt={title} fill className="w-full h-full object-cover " priority />
        </div>
        <div className="flex flex-col gap-5 justify-center lg:w-1/2">
          <h1 className="text-header">{coloredTitle}</h1>
          <Rating value={difficulty} precision={0.5} readOnly />
          <p className="text-primary-gray">{short_description}</p>
        </div>
      </div>
    </Container>
  );
};

export default CourseBanner;
