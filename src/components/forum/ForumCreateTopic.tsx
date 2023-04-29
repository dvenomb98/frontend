import { useUser } from '@/context/userContext';
import { Avatar, Button } from '@mui/material';
import React, { FC } from 'react';

const ForumCreateTopic: FC = () => {
  const { userData } = useUser();

  return (
    <div className="flex items-center gap-5 bg-neutral p-4 rounded-md border border-primary-gray">
      <Avatar src={userData?.photoURL} sx={{ width: 80, height: 80 }} />
      <Button variant="outlined">Create topic</Button>
    </div>
  );
};

export default ForumCreateTopic;
