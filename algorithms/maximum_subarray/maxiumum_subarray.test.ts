import { maxSubArray } from './maximum_subarray';

test('[-2, 1, -3, 4, -1, 2, 1, -5, 4] to equal 6', () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});

test('[-1] to equal -1', () => {
  expect(maxSubArray([-1])).toBe(-1);
});

test('[-2, 1] to equal 1', () => {
  expect(maxSubArray([-2, 1])).toBe(1);
});
