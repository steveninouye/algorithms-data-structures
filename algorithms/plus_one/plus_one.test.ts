import plusOne from './plus_one';

describe('plus one', () => {
  it('should be defined', () => {
    expect(plusOne).toBeDefined();
  });

  it('should add one to the last element in the array if element is less than 9', () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
  });

  it('should change the last element to zero and add 1 to the previous element if previous element is less than 9', () => {
    expect(plusOne([1, 2, 9])).toEqual([1, 3, 0]);
    expect(plusOne([4, 3, 2, 9])).toEqual([4, 3, 3, 0]);
  });
});
