import { applyGoldClassToFirstWord } from '@/utils/parseUtils';
import classNames from 'classnames';
import React, { FC } from 'react';

export enum HeaderSize {
  SUBHEADER = 'text-subheader',
  H1 = 'text-h1',
  H2 = 'text-h2',
  H3 = 'text-h3',
  H4 = 'text-h4',
}

interface HeaderProps {
  size: HeaderSize;
  title: string;
}

const Header: FC<HeaderProps> = ({ size, title }) => {
  const headerClass = classNames(size, 'border-b-2 w-full pb-5 border-primary-gray');
  const formattedTitle = applyGoldClassToFirstWord(title);

  switch (size) {
    case HeaderSize.SUBHEADER:
      return <h1 className={headerClass}>{formattedTitle}</h1>;
    case HeaderSize.H1:
      return <h1 className={headerClass}>{formattedTitle}</h1>;
    case HeaderSize.H2:
      return <h2 className={headerClass}>{formattedTitle}</h2>;
    case HeaderSize.H3:
      return <h3 className={headerClass}>{formattedTitle}</h3>;
    case HeaderSize.H4:
      return <h4 className={headerClass}>{formattedTitle}</h4>;
    default:
      return null;
  }
};

export default Header;
