/** @type {import("eslint").Linter.BaseConfig} */
module.exports = {
  plugins: [
    // 对对象属性进行排序，官方规则：https://cn.eslint.org/docs/rules/sort-keys
    "sort-keys-fix",
    // 对未使用的 es6 模块进行自动删除
    "unused-imports",
    "import"
  ],
  rules: {
    "sort-keys-fix/sort-keys-fix": [
      "off",
      "asc",
      {
        natural: true
      }
    ],
    "unused-imports/no-unused-imports": "error",
    "import/no-unresolved": "error",
    "import/namespace": "error",
    "import/no-self-import": "error",
    "import/export": "error",
    "import/no-mutable-exports": "error",
    "import/first": "error",
    "import/named": "error",
    "import/default": "error",
    "import/no-named-as-default-member": "warn",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"],
          "object",
          "type"
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: false
        },
        "newlines-between": "always"
      }
    ]
  }
}
