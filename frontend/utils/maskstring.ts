export const maskstring = (text: string) => {
  const part1 = text.slice(0, 5);
  const part2 = text.slice(-3);

  return `${part1}...${part2}`;
};
