import React from 'react';
import Container from '../layouts/Container';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="p-16 bg-neutral ">
      <Container>
        <ul className="flex flex-col items-center justify-center">
          <li className="mb-2">@ 2023 Daniel Bílek</li>
          <Link href="https://www.danielbilek.com">
            <li className="text-small text-primary-gray">www.danielbilek.com</li>
          </Link>
          <Link href="mailto:danielbilek98@seznam.cz?subject=DOJO">
            <li className="text-primary-gray text-small">danielbilek98@seznam.cz</li>
          </Link>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
