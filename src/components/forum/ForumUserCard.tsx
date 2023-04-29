import { UserNonSensitive } from '@/types/firebaseTypes';
import React, { FC } from 'react';
import RankDisplay from '../atoms/RankDisplay';
import { Avatar } from '@mui/material';

interface ForumUserCardProps {
  user_profile: UserNonSensitive;
  title?: string;
}

const ForumUserCard: FC<ForumUserCardProps> = ({ user_profile, title }) => {
  return (
    <div className="flex items-center gap-4">
      <Avatar src={user_profile.photoURL} sx={{ width: 40, height: 40 }} />
      <div className="flex flex-col">
        {title && <h4 className="font-medium">{title}</h4>}
        <div className="flex items-center gap-2">
          <p className="font-light">{user_profile.displayName}</p>
          <RankDisplay rank={user_profile.rank} />
        </div>
      </div>
    </div>
  );
};

export default ForumUserCard;
