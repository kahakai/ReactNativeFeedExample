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

export {scale};
