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
  extends: [require.resolve("./import.js")],
  rules: {
    // Possible Problems -- 可能的问题
    "array-callback-return": "error",
    "constructor-super": "error",
    "for-direction": "error",
    "getter-return": "error",
    "no-async-promise-executor": "error",
    "no-await-in-loop": "off",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-const-assign": "error",
    "no-constant-condition": ["error", { checkLoops: false }],
    "no-constructor-return": "error",
    "no-control-regex": "error",
    "no-debugger": "off",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "off",
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-ex-assign": "off",
    "no-fallthrough": "error",
    "no-func-assign": "error",
    "no-import-assign": "off",
    "no-inner-declarations": ["error", "both"],
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-new-symbol": "error",
    "no-obj-calls": "error",
    "no-promise-executor-return": "off",
    "no-prototype-builtins": "off",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-setter-return": "error",
    "no-sparse-arrays": "off",
    "no-template-curly-in-string": "error",
    "no-this-before-super": "error",
    "no-undef": ["error", { typeof: true }],
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "off",
    "no-unreachable": "error",
    "no-unreachable-loop": "off",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-optional-chaining": "error",
    "no-unused-private-class-members": "off",
    "no-unused-vars": "off",
    "no-use-before-define": [
      "error",
      {
        functions: false,
        classes: false,
        variables: true
      }
    ],
    "no-useless-backreference": "off",
    "require-atomic-updates": "off",
    "use-isnan": "error",
    "valid-typeof": "error",
    "dot-notation": "off",

    // Suggestions -- 建议
    "arrow-body-style": "error",
    "capitalized-comments": "off",
    "class-methods-use-this": "off",
    "default-case": "off",
    "default-case-last": "error",
    "default-param-last": "off",
    eqeqeq: "error",
    "init-declarations": "off",
    "max-params": ["error", 4],
    "multiline-comment-style": "off",
    "no-caller": "warn",
    "no-case-declarations": "error",
    "no-confusing-arrow": "error",
    "no-console": "off",
    "no-continue": "off",
    "no-delete-var": "off",
    "no-empty": ["error", { allowEmptyCatch: true }],
    "no-empty-function": "off",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "off",
    "no-extra-boolean-cast": "error",
    "no-extra-label": "error",
    "no-extra-semi": ["error"],
    "no-iterator": ["error"],
    "no-label-var": ["error"],
    "no-loop-func": ["error"],
    "no-magic-numbers": "off",
    "no-new-wrappers": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-octal": "off",
    "no-redeclare": "error",
    "no-regex-spaces": ["error"],
    "no-script-url": ["error"],
    "no-shadow": ["error"],
    "no-shadow-restricted-names": ["error"],
    "no-undefined": ["error"],
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    "no-unused-labels": ["error"],
    "no-useless-catch": ["error"],
    "no-useless-escape": ["error"],
    "no-useless-rename": ["error"],
    "no-var": ["error"],
    "no-with": ["off"],
    "prefer-const": ["error"],
    "prefer-rest-params": ["error"],
    "require-yield": ["off"],
    strict: ["error"],

    // Layout & Formatting -- 布局 & 格式化
    "array-bracket-newline": ["error", "consistent"],
    "array-bracket-spacing": [
      "error",
      "never",
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false
      }
    ],
    "array-element-newline": ["error", "consistent"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": ["error"],
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "stroustrup"],
    "comma-dangle": ["error", "never"],
    "comma-spacing": ["error"],
    "comma-style": ["error"],
    "computed-property-spacing": ["error"],
    "dot-location": ["error", "property"],
    "eol-last": "off",
    "func-call-spacing": ["error"],
    "function-call-argument-newline": ["error"],
    "function-paren-newline": ["error"],
    "generator-star-spacing": ["error"],
    "implicit-arrow-linebreak": ["error"],
    indent: ["error", 2],
    "jsx-quotes": ["error"],
    "key-spacing": ["error"],
    "keyword-spacing": ["error", { before: true, after: true }],
    "line-comment-position": "off",
    "linebreak-style": ["error"],
    "lines-around-comment": "off",
    "lines-between-class-members": ["error"],
    "max-len": "off",
    "max-statements-per-line": "off",
    "multiline-ternary": "off",
    "new-parens": ["error"],
    "newline-per-chained-call": ["error"],
    "no-extra-parens": ["error"],
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "no-multi-spaces": ["error", { ignoreEOLComments: true }],
    "no-multiple-empty-lines": "off",
    "no-tabs": ["error"],
    "no-trailing-spaces": ["error"],
    "no-whitespace-before-property": ["error"],
    "nonblock-statement-body-position": ["error"],
    "object-curly-newline": "off",
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": "off",
    "operator-linebreak": ["error", "after"],
    "padded-blocks": "off",
    "padding-line-between-statements": "off",
    quotes: "error",
    "rest-spread-spacing": ["error"],
    semi: ["error", "never"],
    "semi-spacing": ["error"],
    "semi-style": ["error"],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error"],
    "space-in-parens": ["off"],
    "space-infix-ops": ["error", { int32Hint: false }],
    "space-unary-ops": ["error"],
    "switch-colon-spacing": ["error"],
    "template-curly-spacing": ["error"],
    "template-tag-spacing": ["error"],
    "unicode-bom": "off",
    "wrap-iife": "off",
    "wrap-regex": "off",
    "yield-star-spacing": ["error"]
  }
}