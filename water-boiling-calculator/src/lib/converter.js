export const converter = (val, type) => {
  if (type === "celsius") {
    const result = val * 1.8 + 32;
    return Number(result.toFixed(2));
  } else if (type === "fahrenheit") {
    const result = (val - 32) * (5 / 9);
    return Number(result.toFixed(2));
  }
};
