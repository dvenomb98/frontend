import Header, { HeaderSize } from '@/components/atoms/Header';
import CoursesWrapper from '@/components/courses/CoursesWrapper';
import PageLayout from '@/components/layouts/PageLayout';
import { Courses } from '@/types/firebaseTypes';
import { fetchAllCourses } from '@/utils/fetchUtils';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';

interface CoursesProps {
  courses: Courses[];
}

const Courses: NextPage<CoursesProps> = ({ courses }) => {
  return (
    <PageLayout>
      <Header size={HeaderSize.SUBHEADER} title="All courses" />
      <CoursesWrapper courses={courses} />
    </PageLayout>
  );
};

export default Courses;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const courses = await fetchAllCourses();

    return {
      props: {
        courses,
      },
    };
  } catch {
    return {
      notFound: true,
      revalidate: 500,
    };
  }
};
