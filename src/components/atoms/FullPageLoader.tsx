import { useUser } from '@/context/userContext';
import { Backdrop, CircularProgress } from '@mui/material';
import React, { FC } from 'react';

interface FullPageLoaderProps {
  loading?: boolean;
}

const FullPageLoader: FC<FullPageLoaderProps> = ({ loading }) => {
  const { authLoading } = useUser();

  const isShow = authLoading || !!loading;

  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isShow}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default FullPageLoader;
