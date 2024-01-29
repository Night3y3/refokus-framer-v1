import { Colors } from "./constants";

const getRandomColor = (): string => {
  const colorKeys = Object.keys(Colors);
  const randomIndex = Math.floor(Math.random() * colorKeys.length);
  const randomColorKey = colorKeys[randomIndex];
  return Colors[randomColorKey];
};

export default getRandomColor;
