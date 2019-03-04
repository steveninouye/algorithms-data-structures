import threeSum from './3sum';

describe('#threeSum', () => {
  it('should be defined', () => {
    expect(threeSum).toBeDefined();
  });

  it('should output an array', () => {
    expect(Array.isArray(threeSum([]))).toBe(true);
  });

  it('should be take input of arrays less than 3', () => {
    expect(threeSum([1])).toEqual([]);
  });

  it('should return an empty array if no 3 numbers add to 0', () => {
    expect(threeSum([1, 2, 3])).toEqual([]);
  });

  it('should not contain duplicate triplets', () => {
    let result = threeSum([-1, 0, 1, 1, 1, 1, 1, 1]);
    expect(result[0].sort((a, b) => a - b)).toEqual([-1, 0, 1]);
    expect(result).toHaveLength(0);
  });

  it('should be able to handle duplicatesin the array', () => {
    let result = threeSum([-2, 0, 1, 1, -1, -4]);
    result.sort((a, b) => Math.min(...a) - Math.min(...b));
    result[0].sort((a, b) => a - b);
    result[1].sort((a, b) => a - b);
    expect(result[0]).toEqual([-2, 1, 1]);
    expect(result[1]).toContain([-1, 0, 1]);
  });
});
