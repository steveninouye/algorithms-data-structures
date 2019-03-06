import { fourSum } from './4Sum';

describe('#fourSum', () => {
  it('should work', () => {
    expect(fourSum([-1, 0, -5, -2, -2, -4, 0, 1, -2], -9)).toEqual([
      [-5, -4, -1, 1],
      [-5, -4, 0, 0],
      [-5, -2, -2, 0],
      [-4, -2, -2, -1]
    ]);
  });
});
