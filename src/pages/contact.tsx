import Description from '@/components/atoms/Description';
import Header, { HeaderSize } from '@/components/atoms/Header';
import PageLoader from '@/components/atoms/PageLoader';
import CourseDescription from '@/components/courses/CourseDescription';
import FormInput from '@/components/form/Input';
import PageLayout from '@/components/layouts/PageLayout';
import { contactlist } from '@/constants/contactlist';
import { FormStatus } from '@/constants/globals';
import useFieldValidation from '@/hooks/useValidation';
import { Button } from '@mui/material';
import { Form, Formik } from 'formik';
import { NextPage } from 'next';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import * as yup from 'yup';

const initialValues = {
  email: '',
  fullname: '',
  subject: '',
  message: '',
};

const Contact: NextPage = () => {
  const { yupField } = useFieldValidation();
  const { enqueueSnackbar } = useSnackbar();

  const validationSchema = yup.object({
    fullname: yupField.string,
    email: yupField.email,
    subject: yupField.string,
    message: yupField.string,
  });

  return (
    <PageLayout>
      <div className="flex flex-col gap-10">
        <Header size={HeaderSize.SUBHEADER} title="Contact us" />
        <Description list={contactlist} />
      </div>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={async (values, { resetForm }) => {
          console.log(values);
          const response = await fetch('api/sendEmail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });

          if (response.status === 200) {
            resetForm();
            enqueueSnackbar({
              message: 'Form successfully submitted!',
              variant: 'success',
            });
          } else
            enqueueSnackbar({
              message: 'There was an error during your submittion. Try it again later.',
              variant: 'error',
            });
        }}
      >
        {({ isSubmitting }) => (
          <>
            <Form className="flex flex-col gap-10">
              <Header size={HeaderSize.H2} title="Send us email" />
              <FormInput variant="outlined" name="email" required label="Email" fullWidth />
              <FormInput variant="outlined" name="fullname" required label="Full name" fullWidth />
              <FormInput variant="outlined" name="subject" required label="Subject" fullWidth />
              <FormInput
                multiline
                minRows={6}
                variant="outlined"
                name="message"
                required
                label="Message"
                fullWidth
              />
              <Button type="submit" size="large">
                Submit
              </Button>
            </Form>
            <PageLoader isLoading={isSubmitting} />
          </>
        )}
      </Formik>
    </PageLayout>
  );
};

export default Contact;
