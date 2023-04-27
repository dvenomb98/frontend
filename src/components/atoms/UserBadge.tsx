import { useUser } from '@/context/userContext';
import { ArrowLeftOnRectangleIcon, UserIcon } from '@heroicons/react/24/solid';
import { Button } from '@mui/material';
import React, { FC } from 'react';
import AccountModal from '../account/AccountModal';
import { useToggle } from 'react-use';
import UserProfile from './UserProfile';

const buttonSX = { display: 'flex', alignContent: 'center', gap: 2 };

const UserBadge: FC = () => {
  const { userData, signOut } = useUser();
  const [open, toggle] = useToggle(false);

  if (!userData) return null;

  return (
    <>
      <div className="flex flex-col lg:items-start sm:items-center gap-5">
        <UserProfile
          photoURL={userData.photoURL}
          displayName={userData.displayName}
          email={userData.email}
          rank={userData.rank}
          className="sm:flex-col sm:text-center"
        />
        <div className="flex justify-between w-full items-center sm:flex-col sm:gap-5">
          <Button onClick={signOut} sx={buttonSX}>
            <ArrowLeftOnRectangleIcon className="w-5 h-5" />
            Sign out
          </Button>
          <Button onClick={toggle} sx={buttonSX} color="secondary">
            <UserIcon className="w-5 h-5" />
            Account
          </Button>
        </div>
      </div>

      <AccountModal open={open} toggle={toggle} />
    </>
  );
};

export default UserBadge;
