import { Skeleton } from '@mui/material';
import React, { FC } from 'react';

const TripleSkeleton: FC = () => {
  return (
    <div>
      <Skeleton height="150px" />
      <Skeleton height="150px" />
      <Skeleton height="150px" />
    </div>
  );
};

export default TripleSkeleton;
