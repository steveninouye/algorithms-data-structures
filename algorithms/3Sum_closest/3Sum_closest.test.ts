import { threeSumClosest } from './3Sum_closest';

describe('#threeSumClosest', () => {
  it('should be defined', () => {
    expect(threeSumClosest).toBeDefined();
  });

  it('should return a number', () => {
    expect(typeof threeSumClosest([-1, 2, 1, -4], 1)).toBe('number');
  });

  it('should return the closest sum', () => {
    expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
    expect(threeSumClosest([-1, 2, 1, -4], 2)).toBe(2);
    expect(threeSumClosest([-1, 2, 1, -4], 0)).toBe(0);
  });

  it('should return null if there are less than 3 numbers in the array', () => {
    expect(threeSumClosest([], 0)).toBeNull();
    expect(threeSumClosest([1], 1)).toBeNull();
    expect(threeSumClosest([1, 2], 3)).toBeNull();
  });
});
