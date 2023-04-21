import React, { FC } from 'react';
import Container from '../layouts/Container';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';
import { useToggle } from 'react-use';
import NavbarDrawer from './NavbarDrawer';
import Logo from '../atoms/Logo';

const Navbar: FC = () => {
  const [isOpen, toggle] = useToggle(false);
  return (
    <>
      <Container>
        <div className="py-5 flex justify-between items-center">
          <Logo />

          <button onClick={toggle} aria-label="Menu button">
            <Bars3BottomRightIcon className="w-10 h-10" />
          </button>
        </div>
      </Container>

      <NavbarDrawer isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Navbar;
