import { UserRank } from '@/constants/user';
import { Avatar } from '@mui/material';
import classNames from 'classnames';
import React, { FC } from 'react';
import RankDisplay from './RankDisplay';

interface UserProfileProps {
  photoURL: string;
  displayName: string;
  email: string;
  className?: string;
  rank: UserRank;
}

const UserProfile: FC<UserProfileProps> = ({ photoURL, displayName, email, className, rank }) => {
  return (
    <div className={classNames('flex sm:items-start lg:items-center gap-2', className)}>
      <Avatar src={photoURL} alt={displayName} sx={{ height: 50, width: 50 }} />
      <div>
        <div className="flex lg:items-center sm:items-start gap-1 sm:flex-col-reverse">
          <p>{displayName}</p>
          <RankDisplay rank={rank} />
        </div>
        <p className="text-small text-primary-gray">{email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
