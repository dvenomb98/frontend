import React, { FC, useEffect } from 'react';
import Container from '../layouts/Container';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';
import { useToggle } from 'react-use';
import Logo from '../atoms/Logo';
import CustomDrawer from '../drawer/CustomDrawer';
import NavbarMenu from './NavbarMenu';
import { useRouter } from 'next/router';

const Navbar: FC = () => {
  const [isOpen, toggle] = useToggle(false);
  const router = useRouter();

  useEffect(() => {
    if (!isOpen) return;
    const handleRouteChange = () => {
      toggle();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router, isOpen]);

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

      <CustomDrawer anchor={'right'} isOpen={isOpen} toggle={toggle} keepMounted>
        <NavbarMenu />
      </CustomDrawer>
    </>
  );
};

export default Navbar;
