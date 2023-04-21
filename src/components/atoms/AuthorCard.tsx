import { Creator } from '@/types/firebaseTypes';
import { Avatar } from '@mui/material';
import React, { FC } from 'react';
import Instagram from '../icons/Instagram';
import Youtube from '../icons/Youtube';
import Link from 'next/link';

interface AuthorCardProps {
  author: Creator;
}

const AuthorCard: FC<AuthorCardProps> = ({ author: { instagram, name, channel, avatar } }) => {
  return (
    <div className="flex items-center gap-5">
      <Avatar src={avatar} alt={name} sx={{ height: 124, width: 124 }} />
      <div className="flex flex-col gap-2">
        <p>{name}</p>
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
