const maxSubArray = require('./maximum_subarray');

test('runs', () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});
