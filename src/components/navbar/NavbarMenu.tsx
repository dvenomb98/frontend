import { useUser } from '@/context/userContext';
import { AcademicCapIcon, HeartIcon, HomeIcon, InboxIcon } from '@heroicons/react/24/solid';
import React, { FC } from 'react';
import { ActionButton } from '../atoms/ActionButton';
import UserBadge from '../atoms/UserBadge';
import MenuItem from './MenuItem';

const menuData = [
  {
    label: 'Home',
    path: '/',
    icon: HomeIcon,
  },
  {
    label: 'Courses',
    path: '/courses',
    icon: AcademicCapIcon,
  },
];

const menuAuthData = [
  {
    label: 'Favorites',
    path: '/favorites',
    icon: HeartIcon,
  },
];

const NavbarMenu: FC = () => {
  const { user, signInWithGoogle } = useUser();

  return (
    <nav className="p-10 h-full flex flex-col justify-between">
      <ul className="flex flex-col  divide-y divide-primary-gray">
        {/* NOT SIGNED IT DATA */}
        {menuData.map(({ label, path, icon }) => {
          const Icon = icon;
          return (
            <MenuItem key={label} label={label} path={path} icon={<Icon className="w-5 h-5" />} />
          );
        })}
        {/* SIGNED IN DATA */}
        {user && (
          <>
            {menuAuthData.map(({ label, path, icon }) => {
              const Icon = icon;
              return (
                <MenuItem
                  key={label}
                  label={label}
                  path={path}
                  icon={<Icon className="w-5 h-5" />}
                />
              );
            })}
          </>
        )}
        <MenuItem label={'Contact'} path={'/contact'} icon={<InboxIcon className="w-5 h-5" />} />
      </ul>

      <div>
        {user ? (
          <UserBadge />
        ) : (
          <ActionButton onClick={signInWithGoogle} width="full">
            Sign in
          </ActionButton>
        )}
      </div>
    </nav>
  );
};

export default NavbarMenu;
