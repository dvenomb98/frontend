import PageLayout from '@/components/layouts/PageLayout';
import { Creator } from '@/types/firebaseTypes';
import { fetchAllCreators } from '@/utils/fetchUtils';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { revalidate } from '@/config/next';
import Header, { HeaderSize } from '@/components/atoms/Header';
import AuthorCard from '@/components/atoms/AuthorCard';
import CreatorsWrapper from '@/components/layouts/CreatorsWrapper';

interface CreatorsProps {
  creators: Creator[];
}

const Creators: NextPage<CreatorsProps> = ({ creators }) => {
  return (
    <PageLayout>
      <Header title="Video creators" size={HeaderSize.SUBHEADER} />
      <CreatorsWrapper>
        {creators.map((creator) => (
          <AuthorCard key={creator.id} author={creator} />
        ))}
      </CreatorsWrapper>
    </PageLayout>
  );
};

export default Creators;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const creators = await fetchAllCreators();

    return {
      props: {
        creators,
      },
    };
  } catch {
    return {
      notFound: true,
      revalidate,
    };
  }
};
