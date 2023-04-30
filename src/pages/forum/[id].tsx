import Header, { HeaderSize } from '@/components/atoms/Header';
import ForumBreadCumbs from '@/components/forum/ForumBreadCumbs';
import ForumCreateTopic from '@/components/forum/ForumCreateTopic';
import ForumTopic from '@/components/forum/ForumTopic';
import ForumWrapper from '@/components/forum/ForumWrapper';
import PageLayout from '@/components/layouts/PageLayout';
import { revalidate } from '@/config/next';
import { withProtected } from '@/hooks/withProtected';
import { Courses, Topic } from '@/types/firebaseTypes';
import { fetchForumTopic, fetchSingleForumContent } from '@/utils/fetchUtils';
import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

interface TopicProps {
  topics: Topic[];
  forumContext: Courses;
}

const Topic: NextPage<TopicProps> = ({ topics, forumContext }) => {
  const { title, id } = forumContext;

  return (
    <PageLayout>
      <div className="flex flex-col gap-5">
        <ForumBreadCumbs title={title} />
        <ForumCreateTopic forum_id={id} />
      </div>
      <ForumWrapper>
        {topics.map((topic) => (
          <ForumTopic topic={topic} key={topic.id} />
        ))}
      </ForumWrapper>
    </PageLayout>
  );
};

export default withProtected(Topic);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  if (!id)
    return {
      notFound: true,
      revalidate,
    };

  const topics = await fetchForumTopic(id as string);
  const forumContext = await fetchSingleForumContent(id as string);

  return { props: { topics, forumContext } };
};
