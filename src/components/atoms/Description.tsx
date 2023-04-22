import React, { FC } from 'react';
import Header, { HeaderSize } from './Header';
import { useToggle } from 'react-use';
import { Button } from '@mui/material';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/solid';

interface DescriptionProps {
  title?: string;
  list: string[];
}

const Description: FC<DescriptionProps> = ({ title, list }) => {
  const [isExpanded, toggle] = useToggle(false);

  return (
    <ul className="flex flex-col gap-5 items-start">
      {!!title && <Header title={title} size={HeaderSize.H3} />}
      {isExpanded ? (
        <>
          {list.map((li, index) => (
            <li key={index} className="text-primary-gray">
              {li}
            </li>
          ))}
          <Button onClick={toggle}>
            Hide
            <ArrowUpIcon className="w-5 h-5 ml-2" />
          </Button>
        </>
      ) : (
        <>
          <li className="text-primary-gray">{list[0]}</li>
          <Button onClick={toggle}>
            Read more
            <ArrowDownIcon className="w-5 h-5 ml-2" />
          </Button>
        </>
      )}
    </ul>
  );
};

export default Description;
