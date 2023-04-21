import Header, { HeaderSize } from '@/components/atoms/Header';
import NothingFound from '@/components/atoms/NothingFound';
import TripleSkeleton from '@/components/atoms/TripleSkeleton';
import CourseAccordion from '@/components/courses/CourseAccordion';
import PageLayout from '@/components/layouts/PageLayout';
import { useUser } from '@/context/userContext';
import { withProtected } from '@/hooks/withProtected';
import { Videos } from '@/types/firebaseTypes';
import { fetchFavorites } from '@/utils/fetchUtils';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

const Favorites: NextPage = () => {
  const { user, userData } = useUser();
  const [data, setData] = useState<Videos[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!user || !userData) return;

    const fetchContent = async () => {
      setIsLoading(true);
      const response = await fetchFavorites(userData?.favorites || []);
      setData(response);
      setIsLoading(false);
    };

    fetchContent();
  }, [user, userData]);

  return (
    <PageLayout>
      <Header title="Favorite videos" size={HeaderSize.SUBHEADER} />
      <>
        {isLoading ? (
          <TripleSkeleton />
        ) : !!data?.length ? (
          <div>
            {data.map((favorite) => (
              <CourseAccordion video={favorite} key={favorite.id} />
            ))}
          </div>
        ) : (
          !!data && <NothingFound />
        )}
      </>
    </PageLayout>
  );
};

export default withProtected(Favorites);
