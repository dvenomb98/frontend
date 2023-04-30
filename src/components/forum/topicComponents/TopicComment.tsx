import { Comment } from '@/types/firebaseTypes';
import React, { FC } from 'react';
import ForumUserCard from '../ForumUserCard';

interface TopicCommentProps {
  comment: Comment;
}

const TopicComment: FC<TopicCommentProps> = ({ comment }) => {
  const { user_profile, content, created_at } = comment;

  return (
    <div className="flex flex-col gap-2 bg-neutral p-4 rounded-md">
      <ForumUserCard user_profile={user_profile} size="small" created_at={created_at} />
      <p className="text-primary-gray">{content}</p>
    </div>
  );
};

export default TopicComment;
