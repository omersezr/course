function authenticateUser(username, password) {
  return username === 'admin' && password === 'password123';
}

module.exports = { authenticateUser };
