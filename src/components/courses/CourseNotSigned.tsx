import React, { FC } from 'react';
import { ActionButton } from '../atoms/ActionButton';
import { useUser } from '@/context/userContext';

const CourseNotSigned: FC = () => {
  const { signInWithGoogle } = useUser();
  return (
    <div className="flex flex-col items-center text-center py-20 px-2 bg-primary-black rounded-md shadow-2xl">
      <p>This content is available only to signed users.</p>
      <h4 className="text-subheader font-bold mb-10 mt-5">
        <span className="text-primary-gold">Sign in</span> to view more
      </h4>
      <ActionButton onClick={signInWithGoogle}>Sign in</ActionButton>
    </div>
  );
};

export default CourseNotSigned;
