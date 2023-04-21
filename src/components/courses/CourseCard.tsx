import { Courses } from '@/types/firebaseTypes';
import { Button, Rating } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface CourseCardProps {
  course: Courses;
}

const CourseCard: FC<CourseCardProps> = ({ course }) => {
  const { title, thumbnail, short_description, id, difficulty } = course;

  const href = `/courses/${id}`;

  return (
    <div className="flex flex-col hover:shadow-xl border border-neutral-dark rounded-md overflow-hidden hover:border-primary-gold transition-all duration-300">
      <Link href={href} className="relative h-60 w-full">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="w-full h-full object-cover "
          sizes="100vw, 100vh"
        />
      </Link>
      <div className="flex flex-col  gap-5 p-5 bg-neutral flex-grow">
        <h3>{title}</h3>
        <p className="text-primary-gray text-small ">{short_description}</p>
        <div className="flex justify-between mt-auto items-center">
          <Link href={href}>
            <Button>Dive in</Button>
          </Link>
          <div>
            <p className="text-small">Difficulty</p>
            <Rating value={+difficulty} readOnly size="small" precision={0.5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
