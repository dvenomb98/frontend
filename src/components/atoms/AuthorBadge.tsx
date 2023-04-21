import { Avatar } from '@mui/material';
import React, { FC } from 'react';

interface AvatarBadgeProps {
  imgUrl?: string;
  name?: string;
}

const AvatarBadge: FC<AvatarBadgeProps> = ({ imgUrl, name }) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar src={imgUrl} />
      <p className="text-primary-gray">{name}</p>
    </div>
  );
};

export default AvatarBadge;
