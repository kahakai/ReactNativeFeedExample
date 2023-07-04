const fullValue = (value: number, percent: number): number => {
  return (value * 100) / (100 - percent);
};

const scale = (
  value: number,
  sourceRange: number[],
  targetRange: number[],
): number => {
  const [targetRangeMin, targetRangeMax] = targetRange;
  const [sourceRangeMin, sourceRangeMax] = sourceRange;

  const percent = (value - sourceRangeMin) / (sourceRangeMax - sourceRangeMin);
  const output = percent * (targetRangeMax - targetRangeMin) + targetRangeMin;

  return output;
};

const math = {
  fullValue,
  scale,
};

export {math};
