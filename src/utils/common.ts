export const toggleValue = (arr: never[], value: never) => {
  if (arr.includes(value)) {
    return arr.filter((_) => _ !== value);
  }

  return [...arr, value];
};
