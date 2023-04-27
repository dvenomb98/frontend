import { Creator } from '@/types/firebaseTypes';
import { Avatar } from '@mui/material';
import React, { FC } from 'react';
import Instagram from '../icons/Instagram';
import Youtube from '../icons/Youtube';
import Link from 'next/link';
import { TrophyIcon } from '@heroicons/react/24/solid';
import CustomTooltip from '../drawer/CustomTooltip';

interface AuthorCardProps {
  author: Creator;
}

const AuthorCard: FC<AuthorCardProps> = ({
  author: { instagram, name, channel, avatar, world_champ },
}) => {
  return (
    <div className="flex items-center gap-5 border rounded-md border-primary-gray p-5 hover:border-primary-gold transition duration-300 ease-in-out">
      <Avatar src={avatar} alt={name} sx={{ height: 124, width: 124 }} />
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2 justify-between">
          <p className="text-h4 sm:text-base">{name}</p>
          {world_champ && (
            <CustomTooltip
              placement="top"
              title="This creator was world champion at least once in his career."
            >
              <TrophyIcon className="w-6 h-6 fill-primary-gold" />
            </CustomTooltip>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Link href={instagram} className="flex items-center gap-2">
            <Instagram className="w-8 h-8" />
            <p className="text-primary-gray text-small">Instagram</p>
          </Link>
          <Link href={channel} className="flex items-center gap-2">
            <Youtube className="w-8 h-8" />
            <p className="text-primary-gray text-small">Youtube</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
