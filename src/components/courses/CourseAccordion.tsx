import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React, { FC } from 'react';
import YoutubeVideo from '../atoms/YoutubeVideo';
import { Videos } from '@/types/firebaseTypes';
import AuthorBadge from '../atoms/AuthorBadge';
import CourseAddToFav from './CourseAddToFav';

interface CourseAccordionProps {
  video: Videos;
}

const CourseAccordion: FC<CourseAccordionProps> = ({ video }) => {
  const { creator_info, name, video_url, id } = video;

  return (
    <Accordion TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary sx={{ p: 3 }}>
        <div className="flex flex-col gap-5">
          <AuthorBadge imgUrl={creator_info?.avatar} name={creator_info?.name} />
          <p>{name}</p>
        </div>
      </AccordionSummary>
      <AccordionDetails sx={{ pb: 8 }}>
        <div className="flex flex-col items-center justify-center gap-5">
          <YoutubeVideo videoUrl={video_url} />
          <CourseAddToFav id={id} />
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default CourseAccordion;
