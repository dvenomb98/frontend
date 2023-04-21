import React, { FC } from 'react';
import { AcademicCapIcon, CheckBadgeIcon, CloudArrowUpIcon } from '@heroicons/react/24/solid';

const badgesData = [
  { title: 'Systematic approach', icon: AcademicCapIcon },
  { title: 'Forever free', icon: CheckBadgeIcon },
  { title: 'Regularly updated content', icon: CloudArrowUpIcon },
];

const Badges: FC = () => {
  return (
    <div className="flex items-center justify-between sm:flex-col sm:gap-10">
      {badgesData.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="flex flex-col items-center gap-2">
            <Icon className="w-12 h-12 fill-primary-gold" />
            <h4 className="text-h4">{item.title}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Badges;
