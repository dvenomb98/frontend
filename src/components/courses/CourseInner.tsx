import { CourseContent } from '@/types/firebaseTypes';
import React, { FC } from 'react';
import Header, { HeaderSize } from '../atoms/Header';
import { Alert, AlertTitle } from '@mui/material';

import CourseAccordion from './CourseAccordion';
import AuthorCard from '../atoms/AuthorCard';

interface CourseInnerProps {
  data?: CourseContent;
}

const CourseInner: FC<CourseInnerProps> = ({ data }) => {
  if (!data)
    return (
      <Alert severity="error" variant="outlined">
        <AlertTitle>There was an error</AlertTitle>
        We apologize, but it looks like there was an error while fetching the data. Please try again
        later.
      </Alert>
    );

  const { content, creators } = data;

  return (
    <>
      {/* COURSE CONTENT */}
      <div className="flex flex-col gap-10">
        <Header title="Course content" size={HeaderSize.H3} />
        <div>
          {content?.map((item) => (
            <CourseAccordion video={item} key={item.id} />
          ))}
        </div>
      </div>
      {/* AUTHORS  */}
      <div className="flex flex-col gap-10">
        <Header title="Video authors" size={HeaderSize.H3} />
        <div className="grid grid-cols-3 grid-rows-auto gap-5 sm:grid-cols-1">
          {creators?.map((item) => (
            <AuthorCard key={item.id} author={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseInner;
