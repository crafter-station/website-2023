/** @type {import("prettier").Config} */
module.exports = {
   ...require('prettier-config-standard'),
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
        jsxSingleQuote: false,
        endOfLine: 'auto',
      }
    }
  ],
  singleQuote: false,
  endOfLine: 'auto',
}