/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
        jsxSingleQuote: false,
        endOfLine: 'auto',
        semi: false,
      }
    }
  ],
  singleQuote: false,
  endOfLine: 'auto',
  semi: false,
}