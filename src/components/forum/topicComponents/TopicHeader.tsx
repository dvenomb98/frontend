import RankDisplay from '@/components/atoms/RankDisplay';
import { useUser } from '@/context/userContext';
import { UserNonSensitive } from '@/types/firebaseTypes';
import { HandThumbUpIcon } from '@heroicons/react/24/solid';
import { Avatar } from '@mui/material';
import classNames from 'classnames';
import React, { FC } from 'react';
import ForumUserCard from '../ForumUserCard';

interface TopicHeaderProps {
  title: string;
  likes: string[];
  user_profile: UserNonSensitive;
}

const TopicHeader: FC<TopicHeaderProps> = ({ title, user_profile, likes }) => {
  const { user } = useUser();

  const likesAmount = likes.length;
  const isLiked = likes.some((like) => like === user?.uid);

  return (
    <div className="flex items-center justify-between gap-4">
      <ForumUserCard user_profile={user_profile} title={title} />
      <button className="flex items-center gap-1">
        <HandThumbUpIcon className={classNames('w-5 h-5', isLiked && 'fill-primary-success')} />
        {likesAmount}
      </button>
    </div>
  );
};

export default TopicHeader;
