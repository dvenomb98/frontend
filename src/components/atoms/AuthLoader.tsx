import { useUser } from '@/context/userContext';
import { Backdrop, CircularProgress } from '@mui/material';
import React, { FC } from 'react';

const AuthLoader: FC = () => {
  const { authLoading } = useUser();

  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={authLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default AuthLoader;
