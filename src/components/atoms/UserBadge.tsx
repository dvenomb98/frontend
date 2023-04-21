import { useUser } from '@/context/userContext';
import { ArrowLeftOnRectangleIcon, Cog8ToothIcon } from '@heroicons/react/24/solid';
import { Avatar, Button } from '@mui/material';
import React, { FC } from 'react';
import AccountModal from '../account/AccountModal';
import { useToggle } from 'react-use';

const buttonSX = { display: 'flex', alignContent: 'center', gap: 2 };

const UserBadge: FC = () => {
  const { userData, signOut } = useUser();
  const [open, toggle] = useToggle(false);

  if (!userData) return null;

  return (
    <>
      <div className="flex flex-col lg:items-start gap-5">
        <div className="flex items-center gap-2 sm:flex-col sm:text-center">
          <Avatar
            src={userData.photoURL}
            alt={userData.displayName}
            sx={{ height: 50, width: 50 }}
          />

          <div>
            <p>{userData.displayName}</p>
            <p className="text-small text-primary-gray">{userData.email}</p>
          </div>
        </div>

        <div className="flex justify-between w-full items-center sm:flex-col sm:gap-5">
          <Button onClick={signOut} sx={buttonSX}>
            <ArrowLeftOnRectangleIcon className="w-5 h-5" />
            Sign out
          </Button>
          <Button onClick={toggle} sx={buttonSX} color="secondary">
            <Cog8ToothIcon className="w-5 h-5" />
            Settings
          </Button>
        </div>
      </div>
      <AccountModal open={open} toggle={toggle} />
    </>
  );
};

export default UserBadge;
