import { useUser } from '@/context/userContext';
import { UserNonSensitive } from '@/types/firebaseTypes';
import { HandThumbUpIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import React, { FC, useState } from 'react';
import ForumUserCard from '../ForumUserCard';
import { DateTime } from 'luxon';
import { handleTopicLike, isTopicLiked } from '@/utils/userUtils';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';

interface TopicHeaderProps {
  title: string;
  likes: string[];
  user_profile: UserNonSensitive;
  created_at: string | DateTime;
  id: string;
}

const TopicHeader: FC<TopicHeaderProps> = ({ title, user_profile, likes, created_at, id }) => {
  const { user } = useUser();
  const [loading, setLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const likesAmount = likes.length;
  const isLiked = isTopicLiked(user?.uid!, likes);

  const handleLike = async () => {
    setLoading(true);
    const response = await handleTopicLike(id, user?.uid!);
    if (response) {
      // refetch strategy SSR
      router.replace(router.asPath);
    } else {
      enqueueSnackbar({
        message: 'Transaction failed. Try it again later, please.',
        variant: 'error',
      });
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-between gap-4">
      <ForumUserCard user_profile={user_profile} title={title} created_at={created_at} />

      <button disabled={loading} onClick={handleLike} className="flex items-center gap-1">
        <HandThumbUpIcon className={classNames('w-5 h-5', isLiked && 'fill-primary-success')} />
        {likesAmount}
      </button>
    </div>
  );
};

export default TopicHeader;
