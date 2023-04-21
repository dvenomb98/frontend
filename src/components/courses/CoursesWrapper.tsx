import { Courses } from '@/types/firebaseTypes';
import React, { FC } from 'react';
import CourseCard from './CourseCard';

interface CoursesWrapperProps {
  courses: Courses[];
}

const CoursesWrapper: FC<CoursesWrapperProps> = ({ courses }) => {
  if (!courses?.length) return null;

  return (
    <div className="grid grid-cols-3 grid-rows-auto gap-5 sm:grid-cols-1">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CoursesWrapper;
