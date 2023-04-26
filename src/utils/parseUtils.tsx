import { Courses } from '@/types/firebaseTypes';

export const applyGoldClassToFirstWord = (title: string) => {
  const titleWords = title.split(' ');
  const firstWord = <span className="text-primary-gold">{titleWords[0]}</span>;
  const restOfTitle = titleWords.slice(1).join(' ');

  return (
    <>
      {firstWord} {restOfTitle}
    </>
  );
};

export const getAllTagsFromCourses = (courses: Courses[]): SearchTags[] => {
  const allTags = courses.flatMap((course) => course?.tags);
  const uniqueTags = [...new Set(allTags)];
  return uniqueTags.map((tag) => ({
    label: tag,
    value: tag,
  }));
};
