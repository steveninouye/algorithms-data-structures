import { iUniquePaths, uniquePaths } from './unique_paths';

describe('recursive unique paths', () => {
  it('should be defined', () => {
    expect(uniquePaths).toBeDefined();
  });

  it('should return a number', () => {
    expect(typeof uniquePaths(1, 1)).toBe('number');
  });

  it('should return the number of unique paths', () => {
    expect(uniquePaths(3, 2)).toBe(3);
    expect(uniquePaths(7, 3)).toBe(28);
    expect(uniquePaths(13, 23)).toBe(548354040);
  });

  it('should throw an error if input is less than or equal to 0', () => {
    const error = () => uniquePaths(0, 0);
    expect(error).toThrow('input needs to be greater than 0');
  });
});

describe('iterative unique paths', () => {
  it('should be defined', () => {
    expect(iUniquePaths).toBeDefined();
  });

  it('should return a number', () => {
    expect(typeof iUniquePaths(1, 1)).toBe('number');
  });

  it('should return the number of unique paths', () => {
    expect(iUniquePaths(3, 2)).toBe(3);
    expect(iUniquePaths(7, 3)).toBe(28);
    expect(iUniquePaths(13, 23)).toBe(548354040);
  });

  it('should throw an error if input is less than or equal to 0', () => {
    const error = () => iUniquePaths(0, 0);
    expect(error).toThrow('input needs to be greater than 0');
  });
});
