const randomInRange = (min: number, max: number): number => {
  return min + Math.floor(Math.random() * (max - min));
};

const randomCountInRange = (
  min: number,
  max: number,
  count: number,
): number[] => {
  return [...Array(count).keys()].map(() => {
    return randomInRange(min, max);
  });
};

const random = {
  randomInRange,
  randomCountInRange,
};

export {random};
