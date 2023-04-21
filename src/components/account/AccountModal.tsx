import React, { FC } from 'react';
import CustomDialog from '../drawer/CustomModal';
import Link from 'next/link';
import { useUser } from '@/context/userContext';
// import ThemeToggler from '../atoms/ThemeToggler';

interface AccountModalProps {
  open: boolean;
  toggle: () => void;
}

const AccountModal: FC<AccountModalProps> = ({ open, toggle }) => {
  const { user, userData } = useUser();
  const deleteHref = `mailto:danielbilek98@seznam.cz?subject=Delete my DOJO account: ${
    user?.email || userData?.email
  }`;

  return (
    <>
      <CustomDialog open={open} toggle={toggle} title="Account settings">
        <div className="mt-2 flex flex-col gap-5">
          {/* <ThemeToggler /> */}

          <p className="text-small text-primary-gray">
            To delete your account{' '}
            <Link className="underline" href={deleteHref}>
              email us.
            </Link>
          </p>
        </div>
      </CustomDialog>
    </>
  );
};

export default AccountModal;
