import { useUser } from '@/context/userContext';
import { Avatar, Button } from '@mui/material';
import { Form, Formik } from 'formik';
import React, { FC } from 'react';
import { useToggle } from 'react-use';
import { DateTime } from 'luxon';
import FormInput from '../form/Input';
import { Topic } from '../../types/firebaseTypes';
import { createForumTopic } from '@/utils/userUtils';
import { useSnackbar } from 'notistack';
import { formatDate } from '@/utils/dateUtils';
import { useRouter } from 'next/router';
import PageLoader from '../atoms/PageLoader';

export type ForumTopicInitialValues = Pick<
  Topic,
  'content' | 'forum_id' | 'title' | 'likes' | 'user_id' | 'created_at'
>;

interface ForumCreateTopicProps {
  forum_id: string;
}

const ForumCreateTopic: FC<ForumCreateTopicProps> = ({ forum_id }) => {
  const { userData } = useUser();
  const [isOpen, toggle] = useToggle(false);
  const buttonTitle = isOpen ? 'Close' : 'Create topic';
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const initialValues = {
    content: '',
    created_at: formatDate(DateTime.now()),
    forum_id: forum_id,
    likes: [],
    title: '',
    user_id: userData?.id!,
  };

  const handleSubmit = async (values: ForumTopicInitialValues, resetForm: () => void) => {
    const response = await createForumTopic(values);

    if (response) {
      enqueueSnackbar({
        message: 'Topic sucessfully created!',
        variant: 'success',
      });
      resetForm();
      // refetch strategy
      router.replace(router.asPath);
    } else {
      enqueueSnackbar({
        message: 'Error an occured. Please, try it again later!',
        variant: 'error',
      });
    }
  };

  return (
    <div className="flex flex-col gap-5 bg-neutral p-4 rounded-md border border-primary-gray">
      <div className="flex items-center gap-5">
        <Avatar src={userData?.photoURL} sx={{ width: 80, height: 80 }} />
        <Button onClick={toggle} variant="outlined">
          {buttonTitle}
        </Button>
      </div>
      {isOpen && (
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { resetForm }) => await handleSubmit(values, resetForm)}
        >
          {({ isSubmitting }) => (
            <>
              <Form className="flex flex-col gap-5 items-center">
                <FormInput name="title" label="Topic title" variant="outlined" fullWidth required />
                <FormInput
                  name="content"
                  label="Content"
                  variant="outlined"
                  multiline
                  minRows={6}
                  fullWidth
                  required
                />
                <Button type="submit" sx={{ width: 'fit-content' }} size="large">
                  Submit
                </Button>
              </Form>
              {isSubmitting && <PageLoader isLoading />}
            </>
          )}
        </Formik>
      )}
    </div>
  );
};

export default ForumCreateTopic;
