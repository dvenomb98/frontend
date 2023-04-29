import { URLS } from '@/constants/globals';
import { Breadcrumbs } from '@mui/material';
import Link from 'next/link';
import React, { FC } from 'react';

interface ForumBreadCumbsProps {
  title: string;
}

const ForumBreadCumbs: FC<ForumBreadCumbsProps> = ({ title }) => {
  return (
    <Breadcrumbs role="presentation" aria-label="breadcrumb">
      <Link href={URLS.FORUM} className="hover:underline">
        Forum
      </Link>

      <p className="text-primary-gold" aria-current="page">
        {title}
      </p>
    </Breadcrumbs>
  );
};

export default ForumBreadCumbs;
