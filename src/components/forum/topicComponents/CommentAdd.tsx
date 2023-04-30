import FormInput from '@/components/form/Input';
import { useUser } from '@/context/userContext';
import { Comment } from '@/types/firebaseTypes';
import { formatDate } from '@/utils/dateUtils';
import { createForumComment } from '@/utils/userUtils';
import { PlusIcon } from '@heroicons/react/24/solid';
import { Avatar, IconButton } from '@mui/material';
import { Form, Formik } from 'formik';
import { DateTime } from 'luxon';
import { useSnackbar } from 'notistack';
import React, { FC } from 'react';

export type CommentInitialValues = Pick<Comment, 'content' | 'created_at' | 'user_id' | 'topic_id'>;

interface CommentAddProps {
  topic_id: string;
  handleRefetch: () => void;
}

const CommentAdd: FC<CommentAddProps> = ({ topic_id, handleRefetch }) => {
  const { userData } = useUser();
  const { enqueueSnackbar } = useSnackbar();

  const initialValues: CommentInitialValues = {
    content: '',
    created_at: formatDate(DateTime.now()),
    topic_id: topic_id,
    user_id: userData?.id!,
  };

  const handleSubmit = async (values: CommentInitialValues, resetForm: () => void) => {
    const response = await createForumComment(values);

    if (response) {
      enqueueSnackbar({
        message: 'Comment sucessfully created!',
        variant: 'success',
      });
      resetForm();
      // refetch strategy
      handleRefetch();
    } else {
      enqueueSnackbar({
        message: 'Error an occured. Please, try it again later!',
        variant: 'error',
      });
    }
  };

  return (
    <div className="w-full sticky bottom-0 mt-48 bg-primary-black p-4 rounded-md">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { resetForm }) => await handleSubmit(values, resetForm)}
      >
        {({ isSubmitting, values }) => (
          <>
            <Form className="w-full flex items-center gap-4">
              {!!values.content ? (
                <IconButton type="submit" sx={{ width: 40, height: 40 }}>
                  <PlusIcon className="w-5 h-5" />
                </IconButton>
              ) : (
                <Avatar src={userData?.photoURL} sx={{ width: 40, height: 40 }} />
              )}
              <FormInput
                multiline
                variant="outlined"
                name="content"
                label="Write comment..."
                fullWidth
                size="small"
                disabled={isSubmitting}
              />
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default CommentAdd;
