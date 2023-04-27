import React, { FC } from 'react';
import useMobileWidth from '@/hooks/useMobile';
import { ActionButton } from '../atoms/ActionButton';

interface BannerHeaderProps {
  handleClick: () => void;
}

const BannerHeader: FC<BannerHeaderProps> = ({ handleClick }) => {
  const { isMobile } = useMobileWidth();

  return (
    <div className="lg:basis-1/2 flex flex-col gap-5">
      <h1 className="text-header font-medium">
        Unleash your <span className="text-primary-gold">BJJ</span> skills with{' '}
        <span className="text-primary-gold">FREE</span> courses!
      </h1>
      <h2 className="text-primary-gray">
        Discover the art of Brazilian Jiu-Jitsu: Learn essential techniques and strategies with our
        free, easy-to-follow courses for all skill levels.
      </h2>
      {!isMobile && (
        <ActionButton size="big" shadow="glow" onClick={handleClick}>
          Start now
        </ActionButton>
      )}
    </div>
  );
};

export default BannerHeader;
