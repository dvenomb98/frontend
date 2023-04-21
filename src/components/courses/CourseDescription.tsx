import React, { FC } from 'react';
import Header, { HeaderSize } from '../atoms/Header';
import { useToggle } from 'react-use';
import { Button } from '@mui/material';
import useMobileWidth from '@/hooks/useMobile';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/solid';

interface CourseDescriptionProps {
  desc: string[];
}

const CourseDescription: FC<CourseDescriptionProps> = ({ desc }) => {
  const [isExpanded, toggle] = useToggle(false);

  return (
    <ul className="flex flex-col gap-5 items-start">
      <Header title="About course" size={HeaderSize.H3} />
      {isExpanded ? (
        <>
          {desc.map((desc, index) => (
            <li key={index} className="text-primary-gray">
              {desc}
            </li>
          ))}
          <Button onClick={toggle}>
            Hide
            <ArrowUpIcon className="w-5 h-5 ml-2" />
          </Button>
        </>
      ) : (
        <>
          <li className="text-primary-gray line-clamp-3">{desc[0]}</li>
          <Button onClick={toggle}>
            Read more
            <ArrowDownIcon className="w-5 h-5 ml-2" />
          </Button>
        </>
      )}
    </ul>
  );
};

export default CourseDescription;
