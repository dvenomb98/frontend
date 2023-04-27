import React, { FC } from 'react';
import CustomDialog from '../drawer/CustomModal';
import Link from 'next/link';
import { useUser } from '@/context/userContext';
import { Chip } from '@mui/material';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import UserBadge from '../atoms/UserBadge';
import UserProfile from '../atoms/UserProfile';
// import ThemeToggler from '../atoms/ThemeToggler';

interface AccountModalProps {
  open: boolean;
  toggle: () => void;
}

const AccountModal: FC<AccountModalProps> = ({ open, toggle }) => {
  const { user, userData } = useUser();
  const deleteHref = '/contact';

  if (!userData || !user) return null;

  return (
    <>
      <CustomDialog open={open} toggle={toggle} title="Account ">
        <div className="mt-2 flex flex-col items-start gap-5">
          <UserProfile
            photoURL={userData.photoURL}
            displayName={userData.displayName}
            email={userData.email}
            rank={userData.rank}
          />
          <Chip
            avatar={<CheckCircleIcon className="w-5 h-5 fill-primary-success" />}
            label={`Completed videos: ${userData.completed.length}`}
          />

          <p className="text-small text-primary-gray">
            To delete your account{' '}
            <Link onClick={toggle} className="underline" href={deleteHref}>
              email us.
            </Link>
          </p>
        </div>
      </CustomDialog>
    </>
  );
};

export default AccountModal;
