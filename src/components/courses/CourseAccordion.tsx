import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React, { FC } from 'react';
import YoutubeVideo from '../atoms/YoutubeVideo';
import { Videos } from '@/types/firebaseTypes';
import AuthorBadge from '../atoms/AuthorBadge';
import CourseAddToFav from './CourseAddToFav';
import CourseMark from './CourseMark';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import { isMarkedAsCompleted, isVideoFavorite } from '@/utils/userUtils';
import { useUser } from '@/context/userContext';

interface CourseAccordionProps {
  video: Videos;
}

const CourseAccordion: FC<CourseAccordionProps> = ({ video }) => {
  const { userData } = useUser();
  const { creator_info, name, video_url, id } = video;

  if (!userData) return null;

  const isCompleted = isMarkedAsCompleted(id, userData.completed);
  const isFavorite = isVideoFavorite(id, userData.favorites);

  return (
    <Accordion TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary sx={{ p: 3 }}>
        <div className="flex flex-col gap-5">
          <AuthorBadge imgUrl={creator_info?.avatar} name={creator_info?.name} />
          <div className="flex items-center gap-2">
            <CheckBadgeIcon
              className={classNames(
                'w-8 h-8',
                isCompleted ? 'fill-primary-success' : 'fill-primary-gray',
              )}
            />
            <p>{name}</p>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails sx={{ pb: 8 }}>
        <div className="flex flex-col items-center justify-center gap-5">
          <YoutubeVideo videoUrl={video_url} />
          <div className="flex justify-between gap-5 items-center sm:flex-col">
            <CourseAddToFav id={id} isFavorite={isFavorite} />
            <CourseMark id={id} isCompleted={isCompleted} />
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default CourseAccordion;
