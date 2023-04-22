import { Backdrop, CircularProgress } from '@mui/material';
import React, { FC } from 'react';

interface PageLoaderProps {
  isLoading: boolean;
}

const PageLoader: FC<PageLoaderProps> = ({ isLoading }) => {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default PageLoader;
