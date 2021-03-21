export const throwIfArray = <T>(value: T | T[]): T => {
  if (Array.isArray(value)) {
    throw new Error("Unexpected array type");
  }
  return value;
};

export const throwIfNotArray = <T>(value: T | T[]): T[] => {
  if (!Array.isArray(value)) {
    throw new Error("Expected array type");
  }
  return value;
};
