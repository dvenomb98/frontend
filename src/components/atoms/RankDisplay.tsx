import { UserRank } from '@/constants/user';
import classNames from 'classnames';
import React, { FC } from 'react';

interface RankDisplayProps {
  rank: UserRank;
}

export const mapRankToColor = {
  [UserRank.WHITE]: 'border-rank-white text-rank-white',
  [UserRank.BLUE]: 'border-rank-blue text-rank-blue',
  [UserRank.PURPLE]: 'border-rank-PURPLE text-rank-purple',
  [UserRank.BROWN]: 'border-rank-brown text-rank-brown',
  [UserRank.BLACK]: 'border-none  bg-rank-black text-primary-error',
};

const RankDisplay: FC<RankDisplayProps> = ({ rank }) => {
  return (
    <p
      className={classNames(
        'text-[0.7rem]  px-2 border  w-fit rounded-full bg-neutral',
        mapRankToColor[rank],
      )}
      aria-label="current rank"
    >
      {rank}
    </p>
  );
};

export default RankDisplay;
