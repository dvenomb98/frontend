import { Alert, Input } from '@chakra-ui/react';
import React, { FC } from 'react';

const BannerHeader: FC = () => {
  return (
    <h1 className="lg:basis-1/3 border text-header flex flex-col whitespace-nowrap">
      <span className="font-bold text-primary-gold ">ONLINE DOJO</span>
      <span className="font-light">LEARN BJJ</span>
      <span className="text-primary-gold font-bold">FREE.</span>
      <span className="font-light">FOREVER</span>
    </h1>
  );
};

export default BannerHeader;
