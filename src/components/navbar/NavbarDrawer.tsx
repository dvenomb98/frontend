import React, { FC } from 'react';
import NavbarMenu from './NavbarMenu';
import CustomDrawer from '../drawer/CustomDrawer';

interface NavbarDrawerProps {
  isOpen: boolean;
  toggle: () => void;
}

const NavbarDrawer: FC<NavbarDrawerProps> = ({ isOpen, toggle }) => {
  return (
    <CustomDrawer anchor={'right'} isOpen={isOpen} toggle={toggle} keepMounted>
      <NavbarMenu />
    </CustomDrawer>
  );
};

export default NavbarDrawer;
