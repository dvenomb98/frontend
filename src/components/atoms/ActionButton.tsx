import React from 'react';
import classNames from 'classnames';
import { CircularProgress } from '@mui/material';

export enum ActionButtonVariants {
  PRIMARY = 'primary',
  TRANSPARENT = 'transparent',
}

export enum ActionButtonSizes {
  SMALL = 'small',
  DEFAULT = 'default',
  BIG = 'big',
}

export enum ActionButtonWidth {
  FULL = 'full',
  DEFAULT = 'default',
}

export enum ActionButtonShadow {
  GLOW = 'glow',
  NONE = 'none',
}

export interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: `${ActionButtonVariants}`;
  size?: `${ActionButtonSizes}`;
  width?: `${ActionButtonWidth}`;
  loading?: boolean;
  shadow?: `${ActionButtonShadow}`;
}

const baseClasses = {
  [ActionButtonVariants.PRIMARY]: 'bg-primary-gold  border-none hover:bg-primary-gold-dark',
  [ActionButtonVariants.TRANSPARENT]:
    'bg-transparent text-primary-gold border-primary-gold border-2 hover:border-primary-gold-dark hover:text-primary-gold-dark ',
};

const heightClasses = {
  [ActionButtonSizes.SMALL]: 'h-8',
  [ActionButtonSizes.DEFAULT]: 'h-12',
  [ActionButtonSizes.BIG]: 'h-16',
};

const widthClasses = {
  [ActionButtonWidth.FULL]: 'w-full',
  [ActionButtonWidth.DEFAULT]: 'w-48 min-w-fit',
};

const shadowClasses = {
  [ActionButtonShadow.GLOW]: 'hover:shadow-lg hover:shadow-primary-gold-light/20',
  [ActionButtonShadow.NONE]: '',
};

const getClasses = (
  variant: `${ActionButtonVariants}`,
  disabled: boolean,
  size: `${ActionButtonSizes}`,
  className: string,
  width: `${ActionButtonWidth}`,
  shadow: `${ActionButtonShadow}`,
) =>
  classNames(
    ' px-5 rounded-sm focus:outline-none focus:ring transition ease-in-out tracking-widest',
    baseClasses[variant],
    heightClasses[size],
    widthClasses[width],
    shadowClasses[shadow],
    disabled && 'cursor-default pointer-events-none opacity-80',
    className,
  );

export const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  className = '',
  variant = ActionButtonVariants.PRIMARY,
  size = ActionButtonSizes.BIG,
  width = ActionButtonWidth.DEFAULT,
  shadow = ActionButtonShadow.GLOW,
  disabled = false,
  loading,
  onClick,
  ...props
}) => (
  <button
    className={getClasses(variant, disabled, size, className, width, shadow)}
    disabled={disabled}
    onClick={onClick}
    {...props}
  >
    {loading ? <CircularProgress /> : children}
  </button>
);
