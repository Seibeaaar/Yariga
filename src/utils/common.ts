export const toggleValue = <T>(arr: T[], value: T) => {
  if (arr.includes(value)) {
    return arr.filter((_) => _ !== value);
  }

  return [...arr, value];
};

export const formatPlurarString = (
  value: number,
  single: string,
  plural: string,
) => {
  if (Math.abs(value) === 1) {
    return `${value} ${single}`;
  }

  return `${value} ${plural}`;
};
