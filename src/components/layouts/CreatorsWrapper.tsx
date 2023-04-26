import React, { FC } from 'react';

interface CreatorsWrapperProps {
  children: React.ReactNode;
}

const CreatorsWrapper: FC<CreatorsWrapperProps> = ({ children }) => {
  return <div className="grid grid-cols-2 sm:grid-cols-1 grid-rows-auto gap-10">{children}</div>;
};

export default CreatorsWrapper;
