import { Topic } from '@/types/firebaseTypes';
import React, { FC } from 'react';
import TopicHeader from './topicComponents/TopicHeader';
import TopicDialog from './topicComponents/TopicDialog';

interface ForumTopicProps {
  topic: Topic;
}

const ForumTopic: FC<ForumTopicProps> = ({ topic }) => {
  const { title, created_at, content, user_profile, likes } = topic;

  return (
    <div className="bg-neutral p-5 flex flex-col gap-5">
      <TopicHeader title={title} user_profile={user_profile} likes={likes} />
      <p className="text-primary-gray line-clamp-3">{content}</p>
      <TopicDialog topic={topic} />
    </div>
  );
};

export default ForumTopic;
