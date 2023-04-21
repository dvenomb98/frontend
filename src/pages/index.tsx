import Badges from '@/components/atoms/Badges';
import Header, { HeaderSize } from '@/components/atoms/Header';
import ThemeToggler from '@/components/atoms/ThemeToggler';
import Banner from '@/components/banner/Banner';
import CoursesWrapper from '@/components/courses/CoursesWrapper';
import PageLayout from '@/components/layouts/PageLayout';
import { Courses } from '@/types/firebaseTypes';
import { fetchAllCourses } from '@/utils/fetchUtils';
import { GetStaticProps, NextPage } from 'next';

interface HomeProps {
  courses: Courses[];
}

const Home: NextPage<HomeProps> = ({ courses }) => {
  return (
    <PageLayout>
      <Banner />
      <Badges />
      <div className="flex flex-col gap-10 mt-16">
        <Header size={HeaderSize.SUBHEADER} title="Fresh Courses" />
        <CoursesWrapper courses={courses} />
      </div>
    </PageLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const courses = await fetchAllCourses();

  return {
    props: {
      courses,
    },
    revalidate: 500,
  };
};
