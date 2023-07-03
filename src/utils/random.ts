const random = (min: number, max: number): number => {
  return min + Math.floor(Math.random() * (max - min));
};

const randomCount = (min: number, max: number, count: number): number[] => {
  return [...Array(count).keys()].map(() => {
    return random(min, max);
  });
};

export {random, randomCount};
