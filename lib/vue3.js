/** @type {import("eslint").Linter.Config}*/
module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globalReturn: false,
    impliedStrict: false,
    jsx: true,
    parser: {
      js: "espree",
      ts: "@typescript-eslint/parser",
      "<template>": "espree"
    },
    vueFeatures: {
      filter: true,
      interpolationAsNonHTML: true,
      styleCSSVariableInjection: true
    }
  },
  plugins: ["vue"],
  extends: [
    require.resolve("./base.js"),
    require.resolve("./typescript.js"),
    "plugin:vue/base"
  ],
  rules: {
    // base 基本
    "vue/multi-word-component-names": ["off"],
    "vue/no-arrow-functions-in-watch": ["error"],
    "vue/no-async-in-computed-properties": ["error"],
    "vue/no-computed-properties-in-data": ["error"],
    "vue/no-dupe-keys": ["error"],
    "vue/no-dupe-v-else-if": ["error"],
    "vue/no-duplicate-attributes": [
      "error",
      {
        allowCoexistClass: false,
        allowCoexistStyle: false
      }
    ],
    "vue/no-mutating-props": ["error"],
    "vue/no-parsing-error": ["error"],
    "vue/no-reserved-keys": ["error"],
    "vue/no-reserved-props": ["error"],
    "vue/no-shared-component-data": ["error"],
    "vue/no-side-effects-in-computed-properties": ["error"],
    "vue/no-template-key": ["error"],
    "vue/no-textarea-mustache": ["error"],
    "vue/no-unused-components": ["error"],
    "vue/no-unused-vars": [
      "error",
      {
        ignorePattern: "^_"
      }
    ],
    "vue/no-use-v-if-with-v-for": ["error"],
    "vue/no-useless-template-attributes": ["error"],
    "vue/require-component-is": ["error"],
    "vue/require-prop-type-constructor": ["error"],
    "vue/require-render-return": ["error"],
    "vue/require-v-for-key": ["error"],
    "vue/require-valid-default-prop": ["error"],
    "vue/return-in-computed-property": ["error"],
    "vue/use-v-on-exact": ["error"],
    "vue/valid-next-tick": ["error"],
    "vue/valid-template-root": ["off"],
    "vue/valid-v-bind": ["error"],
    "vue/valid-v-cloak": ["error"],
    "vue/valid-v-else-if": ["error"],
    "vue/valid-v-else": ["error"],
    "vue/valid-v-for": ["error"],
    "vue/valid-v-html": ["error"],
    "vue/valid-v-if": ["error"],
    "vue/valid-v-model": ["error"],
    "vue/valid-v-on": ["error"],
    "vue/valid-v-once": ["error"],
    "vue/valid-v-pre": ["error"],
    "vue/valid-v-show": ["error"],
    "vue/valid-v-slot": ["error"],
    "vue/valid-v-text": ["error"],
    // essential vue3 vue3必备
    "vue/no-deprecated-data-object-declaration": ["error"],
    "vue/no-deprecated-destroyed-lifecycle": ["error"],
    "vue/no-deprecated-dollar-listeners-api": ["error"],
    "vue/no-deprecated-dollar-scopedslots-api": ["error"],
    "vue/no-deprecated-events-api": ["error"],
    "vue/no-deprecated-filter": ["error"],
    "vue/no-deprecated-functional-template": ["error"],
    "vue/no-deprecated-html-element-is": ["error"],
    "vue/no-deprecated-inline-template": ["error"],
    "vue/no-deprecated-props-default-this": ["error"],
    "vue/no-deprecated-router-link-tag-prop": ["error"],
    "vue/no-deprecated-scope-attribute": ["error"],
    "vue/no-deprecated-slot-attribute": ["error"],
    "vue/no-deprecated-slot-scope-attribute": ["error"],
    "vue/no-deprecated-v-bind-sync": ["error"],
    "vue/no-deprecated-v-is": ["error"],
    "vue/no-deprecated-v-on-native-modifier": ["error"],
    "vue/no-deprecated-v-on-number-modifiers": ["error"],
    "vue/no-export-in-script-setup": ["error"],
    "vue/no-lifecycle-after-await": ["error"],
    "vue/no-ref-as-operand": ["error"],
    "vue/no-setup-props-destructure": ["error"],
    "vue/no-v-for-template-key-on-child": ["error"],
    "vue/no-watch-after-await": "off",
    "vue/require-slots-as-functions": ["error"],
    "vue/require-toggle-inside-transition": ["error"],
    "vue/return-in-emits-validator": "off",
    "vue/valid-define-emits": ["error"],
    "vue/valid-define-props": ["error"],
    "vue/valid-v-is": ["error"],
    "vue/valid-v-memo": ["error"],
    // strongly 建议
    "vue/attribute-hyphenation": ["error"],
    "vue/component-definition-name-casing": ["error", "PascalCase"],
    "vue/first-attribute-linebreak": "off",
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "always"
      }
    ],
    "vue/html-closing-bracket-spacing": ["error"],
    "vue/html-end-tags": ["error"],
    "vue/html-indent": ["error"],
    "vue/html-quotes": ["error"],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "any",
          component: "always"
        },
        svg: "always",
        math: "always"
      }
    ],
    "vue/multiline-html-element-content-newline": ["error"],
    "vue/mustache-interpolation-spacing": ["error"],
    "vue/no-multi-spaces": ["error"],
    "vue/no-spaces-around-equal-signs-in-attribute": ["error"],
    "vue/no-template-shadow": ["error"],
    "vue/one-component-per-file": "off",
    "vue/prop-name-casing": ["error"],
    "vue/require-default-prop": ["error"],
    "vue/require-prop-types": ["error"],
    "vue/v-slot-style": [
      "error",
      {
        atComponent: "shorthand",
        default: "shorthand",
        named: "shorthand"
      }
    ],
    "vue/require-explicit-emits": ["error"],
    "vue/v-on-event-hyphenation": ["off"],
    "vue/component-tags-order": ["error"],
    "vue/no-lone-template": ["error"],
    "vue/this-in-template": ["error"],
    // 未分类
    "vue/component-api-style": ["error"],
    "vue/component-name-in-template-casing": ["error"],
    "vue/component-options-name-casing": ["error"],
    "vue/no-child-content": ["error"],
    "vue/no-invalid-model-keys": ["error"],
    "vue/no-undef-components": ["error"],
    "vue/no-undef-properties": ["error"],
    "vue/no-useless-mustaches": ["error"],
    "vue/no-useless-v-bind": ["error"],
    "vue/no-v-text-v-html-on-component": ["error"],
    "vue/padding-line-between-blocks": ["error"],
    "vue/prefer-import-from-vue": ["error"],
    "vue/prefer-true-attribute-shorthand": ["error"],
    "vue/require-direct-export": ["error"],
    "vue/v-on-function-call": ["error"],
    // 扩展规则
    "vue/array-bracket-newline": ["error", "consistent"],
    "vue/array-bracket-spacing": [
      "error",
      "never",
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false
      }
    ],
    "vue/arrow-spacing": ["error"],
    "vue/block-spacing": ["error", "always"],
    "vue/brace-style": ["error", "stroustrup"],
    "vue/comma-dangle": ["error", "never"],
    "vue/comma-spacing": ["error"],
    "vue/comma-style": ["error"],
    "vue/dot-location": ["error", "property"],
    "vue/dot-notation": ["off"],
    "vue/eqeqeq": ["error"],
    "vue/func-call-spacing": ["error"],
    "vue/key-spacing": ["error"],
    "vue/keyword-spacing": ["error", { before: true, after: true }],
    "vue/max-len": "off",
    "vue/no-constant-condition": ["error", { checkLoops: false }],
    "vue/no-empty-pattern": ["error"],
    "vue/no-extra-parens": ["error"],
    "vue/no-irregular-whitespace": ["error"],
    "vue/no-loss-of-precision": ["error"],
    "vue/object-curly-spacing": ["error", "always"],
    "vue/operator-linebreak": ["error", "after"],
    "vue/space-infix-ops": ["error", { int32Hint: false }],
    "vue/space-unary-ops": ["error"],
    "vue/template-curly-spacing": ["error"],
    // 要忽略的冲突
    "import/named": ["off"]
  }
}
