// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
/** @type {import("eslint").Linter.Config} */

module.exports = {
  extends: [
    'standard-with-typescript',
    'plugin:prettier/recommended',
    'plugin:astro/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: path.normalize(__dirname),
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/triple-slash-reference': 'off'
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        // Override or add rule settings here, such as:
        // "astro/no-set-html-directive": "error"
      }
    }
  ]
}
