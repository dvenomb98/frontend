import { Skeleton } from '@mui/material';
import React, { FC } from 'react';

const CommentSkeletons: FC = () => {
  return (
    <div>
      <Skeleton sx={{ width: '100%', height: 100 }} />
      <Skeleton sx={{ width: '100%', height: 100 }} />
      <Skeleton sx={{ width: '100%', height: 100 }} />
    </div>
  );
};

export default CommentSkeletons;
