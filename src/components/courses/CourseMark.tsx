import { useUser } from '@/context/userContext';
import { addToCompleted, isMarkedAsCompleted } from '@/utils/userUtils';
import { CheckBadgeIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import React, { FC, useState } from 'react';

interface CourseMarkProps {
  id: string;
  isCompleted?: boolean;
}

const CourseMark: FC<CourseMarkProps> = ({ id, isCompleted }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { userData, user } = useUser();
  const { enqueueSnackbar } = useSnackbar();

  if (!user || !userData) return null;

  const handleCompleted = async () => {
    setLoading(true);
    const res = await addToCompleted(id, user.uid, userData.completed || []);
    setLoading(false);

    if (res) {
      enqueueSnackbar({
        message: isCompleted ? 'Successfully removed!' : 'Successfully marked as completed!',
        variant: 'success',
      });
    } else
      enqueueSnackbar({ message: 'There was an error. Try it again later!', variant: 'error' });
  };

  const Icon = isCompleted ? XCircleIcon : CheckBadgeIcon;

  return (
    <Button
      disabled={loading}
      color={isCompleted ? 'secondary' : 'success'}
      onClick={handleCompleted}
      sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
    >
      <Icon className="w-5 h-5" />
      {isCompleted ? 'Remove from completed' : 'Mark as completed'}
    </Button>
  );
};

export default CourseMark;
