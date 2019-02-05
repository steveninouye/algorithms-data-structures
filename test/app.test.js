const { assert } = require('chai');
const app = require('../app');

describe('App', function() {
  it('app should return hello', function() {
    assert.equal(app(), 'hello');
  });
});
