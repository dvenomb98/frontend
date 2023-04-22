import { Avatar } from '@mui/material';
import classNames from 'classnames';
import React, { FC } from 'react';

interface UserProfileProps {
  photoURL: string;
  displayName: string;
  email: string;
  className?: string;
}

const UserProfile: FC<UserProfileProps> = ({ photoURL, displayName, email, className }) => {
  return (
    <div className={classNames('flex items-center gap-2', className)}>
      <Avatar src={photoURL} alt={displayName} sx={{ height: 50, width: 50 }} />
      <div>
        <p>{displayName}</p>
        <p className="text-small text-primary-gray">{email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
