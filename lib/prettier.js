const { cosmiconfigSync } = require("cosmiconfig")
const explorer = cosmiconfigSync("prettier")
const userConfig = explorer.search()
const config = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "none",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "avoid",
  vueIndentScriptAndStyle: false,
  endOfLine: "lf",
  plugins: [require("prettier-plugin-packagejson")],
  ...userConfig?.config
}

/** @type {import("eslint").Linter.Config}*/
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
    serviceworker: true,
    worker: true
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ["plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": ["error", config]
  }
}
