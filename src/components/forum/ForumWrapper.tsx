import React, { FC } from 'react';

interface ForumWrapperProps {
  children: React.ReactNode;
}

const ForumWrapper: FC<ForumWrapperProps> = ({ children }) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};

export default ForumWrapper;
