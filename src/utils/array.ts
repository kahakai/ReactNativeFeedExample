const shuffle = <T>(array: T[]): T[] => {
  // Not truly random, better use Fisher-Yates algorithm or its optimized version Durstenfeld shuffle.
  return [...array].sort(() => 0.5 - Math.random());
};

const removeElementAt = <T>(array: T[], index: number): T[] => {
  const halfBeforeElement = array.slice(0, index);
  const halfAfterElement = array.slice(index + 1);
  return halfBeforeElement.concat(halfAfterElement);
};

export {shuffle, removeElementAt};
