import TripleSkeleton from '@/components/atoms/TripleSkeleton';
import CourseBanner from '@/components/courses/CourseBanner';
import CourseInner from '@/components/courses/CourseInner';
import CourseDescription from '@/components/courses/CourseDescription';
import CourseNotSigned from '@/components/courses/CourseNotSigned';
import PageLayout from '@/components/layouts/PageLayout';
import { useUser } from '@/context/userContext';
import { CourseContent, Courses } from '@/types/firebaseTypes';
import { fetchAllCourses, fetchSingleCourse, fetchCourseContent } from '@/utils/fetchUtils';

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React, { useEffect, useState } from 'react';

interface CourseProps {
  course: Courses;
}

const Course: NextPage<CourseProps> = ({ course }) => {
  const { thumbnail, short_description, title, description, id, difficulty } = course;
  const [courseContent, setCourseContent] = useState<CourseContent>();
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useUser();

  useEffect(() => {
    if (!user) return;
    const fetchContent = async () => {
      setLoading(true);
      const response = await fetchCourseContent(id);
      setCourseContent(response);
      setLoading(false);
    };

    fetchContent();
  }, [user]);

  return (
    <>
      <CourseBanner
        difficulty={+difficulty}
        img={thumbnail}
        title={title}
        short_description={short_description}
      />
      <PageLayout>
        <CourseDescription desc={description} />
        {user ? (
          <>{loading ? <TripleSkeleton /> : <CourseInner data={courseContent} />}</>
        ) : (
          <CourseNotSigned />
        )}
      </PageLayout>
    </>
  );
};

export default Course;

export const getStaticPaths: GetStaticPaths = async () => {
  const courses = await fetchAllCourses();

  const paths = courses?.map((course) => ({
    params: { id: course.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const course = await fetchSingleCourse(params?.id as string);

    if (!course) {
      return { notFound: true, revalidate: 500 };
    }

    return {
      props: {
        course,
      },
      revalidate: 500,
    };
  } catch {
    return { notFound: true, revalidate: 500 };
  }
};
