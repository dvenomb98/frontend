import React from 'react';
import Container from '../layouts/Container';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="p-16 bg-neutral ">
      <Container>
        <ul className="flex flex-col items-center justify-center gap-2">
          <li>@ 2023 Daniel Bílek</li>
          <Link
            className="text-primary-gray text-small"
            href="mailto:danielbilek98@seznam.cz?subject=DOJO"
          >
            <li>danielbilek98@seznam.cz</li>
          </Link>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
