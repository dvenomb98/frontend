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
