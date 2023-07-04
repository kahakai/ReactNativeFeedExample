const removeElementAt = <T>(array: T[], index: number): T[] => {
  const halfBeforeElement = array.slice(0, index);
  const halfAfterElement = array.slice(index + 1);
  return halfBeforeElement.concat(halfAfterElement);
};

const array = {
  removeElementAt,
};

export {array};
