import { Alert, AlertTitle } from '@mui/material';
import Link from 'next/link';
import React, { FC } from 'react';

const NothingFound: FC = () => {
  return (
    <Alert variant="outlined" severity="warning">
      <AlertTitle>Nothing found</AlertTitle>
      It seems like you dont have any favorites videos yet. Look at{' '}
      <Link href="/courses" className="underline">
        courses
      </Link>{' '}
      and come later.
    </Alert>
  );
};

export default NothingFound;
