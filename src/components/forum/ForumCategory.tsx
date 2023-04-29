import { URLS } from '@/constants/globals';
import { Forum } from '@/types/firebaseTypes';
import Link from 'next/link';
import React, { FC } from 'react';

interface ForumCategoryProps {
  category: Forum;
}

const ForumCategory: FC<ForumCategoryProps> = ({ category }) => {
  const { title, description, id } = category;

  const href = `${URLS.FORUM}/${id}`;

  return (
    <Link
      href={href}
      className="flex flex-col gap-2 border p-5 rounded-md hover:border-primary-gold duration-300 ease-in-out transition"
    >
      <h4 className="text-h4">{title}</h4>
      <p className="text-primary-gray">{description}</p>
    </Link>
  );
};

export default ForumCategory;
