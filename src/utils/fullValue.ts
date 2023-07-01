const fullValue = (value: number, percent: number): number => {
  return (value * 100) / (100 - percent);
};

export {fullValue};
