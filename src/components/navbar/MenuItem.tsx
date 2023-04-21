import Link from 'next/link';
import React, { FC } from 'react';

interface MenuItemProps {
  label: string;
  path: string;
  icon: JSX.Element;
}

const MenuItem: FC<MenuItemProps> = ({ label, path, icon }) => {
  return (
    <Link
      key={label}
      href={path}
      className="flex items-center gap-2 py-5 hover:text-primary-gold ease-in-out transition"
    >
      {icon}
      <li>{label}</li>
    </Link>
  );
};

export default MenuItem;
