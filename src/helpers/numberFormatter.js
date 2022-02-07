export const numberFormatter = (number) => {
  const value = parseFloat(number);
  if (value > 999 && value < 1000000) {
    return `${(value / 1000).toFixed(1)}k`;
  }
  return value;
};
