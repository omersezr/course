const { authenticateUser } = require('../src/authentication');

describe('authentication', () => {
  test('authenticates with correct credentials', () => {
    expect(authenticateUser('admin', 'password123')).toBe(true);
  });

  test('fails with incorrect credentials', () => {
    expect(authenticateUser('admin', 'wrong')).toBe(false);
  });
});
