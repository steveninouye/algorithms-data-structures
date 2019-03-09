import { twoSum } from './two_sum';

describe('#twoSum', () => {
  it('should be defined', () => {
    expect(twoSum).toBeDefined();
  });

  it('should output an array of two numbers', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toHaveLength(2);
    expect(typeof twoSum([2, 7, 11, 15], 9)[0]).toBe('number');
    expect(typeof twoSum([2, 7, 11, 15], 9)[1]).toBe('number');
  });

  it('should return two numbers in the array that equal the target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toContain(0);
    expect(twoSum([2, 7, 11, 15], 9)).toContain(1);
    expect(twoSum([2, 7, 11, 15], 18)).toContain(2);
    expect(twoSum([2, 7, 11, 15], 18)).toContain(1);
  });
});
