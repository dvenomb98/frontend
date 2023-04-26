import { CourseContent } from '@/types/firebaseTypes';
import React, { FC } from 'react';
import Header, { HeaderSize } from '../atoms/Header';
import { Alert, AlertTitle } from '@mui/material';

import CourseAccordion from './CourseAccordion';
import AuthorCard from '../atoms/AuthorCard';
import CreatorsWrapper from '../layouts/CreatorsWrapper';

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
        <CreatorsWrapper>
          {creators?.map((item) => (
            <AuthorCard key={item.id} author={item} />
          ))}
        </CreatorsWrapper>
      </div>
    </>
  );
};

export default CourseInner;
