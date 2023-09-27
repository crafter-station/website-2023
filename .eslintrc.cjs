/** @type {import("eslint").Linter.Config} */

// const path = require("path")

module.exports = {
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      extends: [
        "plugin:react/recommended",
        "standard-with-typescript",
        "plugin:prettier/recommended",
      ],
      plugins: ["react"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/triple-slash-reference": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "react/react-in-jsx-scope": "off",
      },
    },
    {
      files: ["*.astro"],
      extends: [
        "plugin:astro/recommended",
        "plugin:prettier/recommended",
      ],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
  ],
}
