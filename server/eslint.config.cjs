const globals = require('globals');
const tseslint = require('typescript-eslint');
const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
  // TypeScript-specific config
  {
    files: ['**/*.ts'],
    ...tseslint.configs.recommended[0],
  },
  // CommonJS/JavaScript config
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      sourceType: 'script',
      globals: globals.node,
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
]);
