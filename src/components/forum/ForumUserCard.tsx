import { UserNonSensitive } from '@/types/firebaseTypes';
import React, { FC } from 'react';
import RankDisplay from '../atoms/RankDisplay';
import { Avatar } from '@mui/material';
import classNames from 'classnames';
import { DateTime } from 'luxon';

interface ForumUserCardProps {
  user_profile: UserNonSensitive;
  title?: string;
  size?: 'small' | 'default';
  created_at: string | DateTime;
}

const ForumUserCard: FC<ForumUserCardProps> = ({
  user_profile,
  title,
  size = 'default',
  created_at,
}) => {
  return (
    <div className="flex items-center gap-4">
      <Avatar src={user_profile.photoURL} sx={{ width: 40, height: 40 }} />
      <div className="flex flex-col">
        {title && <h4 className="font-medium">{title}</h4>}
        <div className={classNames('flex items-center gap-2', size === 'small' && 'text-small')}>
          <p className="font-light">{user_profile.displayName}</p>
          <RankDisplay rank={user_profile.rank} />
        </div>
        <p className="text-small text-primary-gray">{created_at?.toString()}</p>
      </div>
    </div>
  );
};

export default ForumUserCard;
