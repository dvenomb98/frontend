import Header, { HeaderSize } from '@/components/atoms/Header';
import PageLayout from '@/components/layouts/PageLayout';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

const ErrorPage: NextPage = () => {
  return (
    <PageLayout>
      <Header size={HeaderSize.SUBHEADER} title="Nothing found here" />
      <p>
        It looks like this page doesn&apos;t exist or is temporarily unavailable. Try looking at our
        list of
        <Link href="/courses" className="underline text-primary-gold">
          courses.
        </Link>
      </p>
    </PageLayout>
  );
};

export default ErrorPage;
