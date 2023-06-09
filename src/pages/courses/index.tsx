import Header, { HeaderSize } from '@/components/atoms/Header';
import CourseSearch from '@/components/courses/CourseSearch';
import CoursesWrapper from '@/components/courses/CoursesWrapper';
import PageLayout from '@/components/layouts/PageLayout';
import { revalidate } from '@/config/next';
import { Courses } from '@/types/firebaseTypes';
import { fetchAllCourses } from '@/utils/fetchUtils';
import { getAllTagsFromCourses } from '@/utils/parseUtils';
import { GetStaticProps, NextPage } from 'next';
import React, { useMemo, useState } from 'react';

interface CoursesProps {
  courses: Courses[];
  searchOptions: SearchTags[];
}

const Courses: NextPage<CoursesProps> = ({ courses, searchOptions }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const filteredCourses = useMemo(() => {
    if (!searchValue) return courses;
    return courses.filter((course) => course.tags.includes(searchValue));
  }, [searchValue]);

  return (
    <PageLayout>
      <div className="flex flex-col gap-10">
        <Header size={HeaderSize.SUBHEADER} title="All courses" />
        <CourseSearch
          options={searchOptions}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <CoursesWrapper courses={filteredCourses} />
    </PageLayout>
  );
};

export default Courses;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const courses = await fetchAllCourses();
    const searchOptions = getAllTagsFromCourses(courses);

    return {
      props: {
        courses,
        searchOptions,
      },
    };
  } catch {
    return {
      notFound: true,
      revalidate,
    };
  }
};
