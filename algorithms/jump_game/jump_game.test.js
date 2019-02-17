const canJump = require('./jump_game');

test('[2,3,1,1,4] to be true', () => {
  expect(canJump([2, 3, 1, 1, 4])).toBe(true);
});

test('[3,2,1,0,4] to be false', () => {
  expect(canJump([3, 2, 1, 0, 4])).toBe(false);
});

test('[2,5,0,0] to be true', () => {
  expect(canJump([2, 5, 0, 0])).toBe(true);
});
