/** @type {import('jest').Config} */
module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/index.test.cjs'], // or ['**/*.test.cjs'] for all cjs tests
    transform: {}, // Disable babel transforms since you're using .cjs (commonjs)
  };