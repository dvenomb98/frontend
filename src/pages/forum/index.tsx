import Header, { HeaderSize } from '@/components/atoms/Header';
import PageLayout from '@/components/layouts/PageLayout';
import { fetchForumContent } from '@/utils/fetchUtils';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { revalidate } from '@/config/next';
import { Forum } from '@/types/firebaseTypes';
import ForumWrapper from '@/components/forum/ForumWrapper';
import ForumCategory from '@/components/forum/ForumCategory';
import { withProtected } from '@/hooks/withProtected';

interface ForumProps {
  forumCategories: Forum[];
}

const Forum: NextPage<ForumProps> = ({ forumCategories }) => {
  return (
    <PageLayout>
      <Header title="Forum" size={HeaderSize.SUBHEADER} />
      <ForumWrapper>
        {forumCategories.map((category) => (
          <ForumCategory category={category} key={category.id} />
        ))}
      </ForumWrapper>
    </PageLayout>
  );
};

export default withProtected(Forum);

export const getStaticProps: GetStaticProps = async () => {
  const forumCategories = await fetchForumContent();

  return {
    props: {
      forumCategories,
    },
    revalidate,
  };
};
