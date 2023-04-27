import React, { FC } from 'react';
import BannerHeader from './BannerHeader';
import useMobileWidth from '@/hooks/useMobile';
import { ActionButton } from '../atoms/ActionButton';
import { useUser } from '@/context/userContext';
import { useRouter } from 'next/router';

const Banner: FC = () => {
  const { isMobile } = useMobileWidth();
  const { push } = useRouter();
  const { user, signInWithGoogle } = useUser();

  const handleClick = () => {
    if (user) push('/courses');
    else signInWithGoogle();
  };

  return (
    <div className="flex items-center sm:flex-col gap-10 justify-between lg:h-banner">
      <BannerHeader handleClick={handleClick} />

      <img
        src="/images/banner.png"
        className="w-full lg:w-1/2 object-scale-down sm:max-h-96"
        loading="eager"
        alt="Main banner"
      />

      {isMobile && (
        <ActionButton size="big" width="full" shadow="glow" onClick={handleClick}>
          Start now
        </ActionButton>
      )}
    </div>
  );
};

export default Banner;
