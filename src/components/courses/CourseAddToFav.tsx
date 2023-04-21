import { useUser } from '@/context/userContext';
import { addToFavorites, isVideoFavorite } from '@/utils/userUtils';
import { HeartIcon, TrashIcon } from '@heroicons/react/24/solid';
import { Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import React, { FC, useState } from 'react';

interface CourseAddToFavProps {
  id: string;
}

const CourseAddToFav: FC<CourseAddToFavProps> = ({ id }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { userData, user } = useUser();
  const { enqueueSnackbar } = useSnackbar();

  if (!user || !userData) return null;

  const isFavorite = isVideoFavorite(id, userData?.favorites);

  const handleFavorites = async () => {
    setLoading(true);
    const res = await addToFavorites(id, user.uid);
    setLoading(false);

    if (res) {
      enqueueSnackbar({
        message: isFavorite
          ? 'Successfully removed from favorites!'
          : 'Successfully added to favorites!',
        variant: 'success',
      });
    } else
      enqueueSnackbar({ message: 'There was an error. Try it again later!', variant: 'error' });
  };

  const Icon = isFavorite ? TrashIcon : HeartIcon;

  return (
    <Button
      disabled={loading}
      onClick={handleFavorites}
      sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
    >
      <Icon className="w-5 h-5" />
      {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    </Button>
  );
};

export default CourseAddToFav;
