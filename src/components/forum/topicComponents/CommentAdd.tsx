import FormInput from '@/components/form/Input';
import { useUser } from '@/context/userContext';
import { Avatar } from '@mui/material';
import { Form, Formik } from 'formik';
import React, { FC } from 'react';

interface CommentAddProps {
  topic_id: string;
}

const CommentAdd: FC<CommentAddProps> = ({ topic_id }) => {
  const { userData } = useUser();

  const initialValues = {
    content: '',
    created_at: '',
    topic_id: topic_id,
    user_id: userData?.id,
  };

  return (
    <div className="flex items-center w-full gap-4 sticky bottom-0 bg-primary-black p-4 rounded-md">
      <Avatar src={userData?.photoURL} sx={{ width: 40, height: 40 }} />
      <Formik initialValues={initialValues} onSubmit={() => undefined}>
        <Form className="w-full">
          <FormInput
            variant="outlined"
            name="content"
            label="Write comment..."
            fullWidth
            size="small"
          />
        </Form>
      </Formik>
    </div>
  );
};

export default CommentAdd;
