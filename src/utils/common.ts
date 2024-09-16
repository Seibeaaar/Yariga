export const toggleValue = <T>(arr: T[], value: T) => {
  if (arr.includes(value)) {
    return arr.filter((_) => _ !== value);
  }

  return [...arr, value];
};
