const randomNum = (min: number, max: number): number => {
  let spread: number = max - min + 1;
  return Math.floor(Math.random() * spread) + min;
};

export default randomNum;
