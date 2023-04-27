import Description from '@/components/atoms/Description';
import Header, { HeaderSize } from '@/components/atoms/Header';
import PageLoader from '@/components/atoms/PageLoader';
import FormInput from '@/components/form/Input';
import PageLayout from '@/components/layouts/PageLayout';
import useFieldValidation from '@/hooks/useValidation';
import { Button } from '@mui/material';
import { Form, Formik } from 'formik';
import { NextPage } from 'next';
import { useSnackbar } from 'notistack';
import React from 'react';
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

const contactlist = [
  'To get in touch with us, simply fill out the DOJO Contact Form with your name, email address, and a detailed message outlining your inquiry. Our dedicated support team will review your submission and respond as quickly as possible.',
  "We understand that your needs may be unique, and we're here to help. Our contact form is designed for you to reach out to us regarding a variety of topics, including:",

  "Creating Your Own Courses: Interested in developing a custom course or sharing your expertise with our community? We're eager to collaborate and help you turn your vision into reality.",

  'Personal Information: If you have any questions or concerns about your account or personal information, our team is committed to ensuring your privacy and providing prompt assistance.',

  "Business Ideas & Partnerships: Do you have a groundbreaking idea that could revolutionize the world of BJJ? Or perhaps you're looking for a collaboration opportunity with DOJO? We're open to exploring new partnerships and working together to expand the reach of BJJ across the globe.",
];
