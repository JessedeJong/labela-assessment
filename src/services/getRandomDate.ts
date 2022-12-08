export const getRandomDate = () => {
  const start = new Date(1984, 0, 1);
  const end = new Date(2000, 0, 1);

  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};
