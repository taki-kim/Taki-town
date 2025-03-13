export const truncateString = (length: number, string: string) => {
  if (string.length <= length) return string;
  else return `${string.slice(0, length)}...`;
};
