# eslint-plugin-usagisah

适用于的 lib, react, vue3, ts, js 的，开放又通用的配置

## 下载使用

1. 首先下载相关依赖

```shell
pnpm add  eslint  eslint-plugin-usagisah  -D
```

2. 创建自己的配置文件

```shell
touch ./.eslintrc.js
```



## recommended

该配置包含了所有配置，属于通用配置，内容有

+ react
+ vue3
+ base
+ typescript
+ prettier

```js
//.eslintrc.js
module.exports = {
  extends: ["plugin:usagisah/recommended"],
  ignorePatterns: [".eslintrc.js"]
}
```

## React

该配置包含了 `base & typescript`

```js
//.eslintrc.js
module.exports = {
  extends: ["plugin:usagisah/react"],
  ignorePatterns: [".eslintrc.js"]
}
```

## Vue3

该配置包含了 `base & typescript`

```js
//.eslintrc.js
module.exports = {
  extends: ["plugin:usagisah/vue3"],
  ignorePatterns: [".eslintrc.js"]
}
```

## TypeScript

```js
//.eslintrc.js
module.exports = {
  extends: ["plugin:usagisah/typescript"],
  ignorePatterns: [".eslintrc.js"]
}
```

## Base

该配置包含了对 lint 的基本规则集，以及`eslint-keys-fix & eslint-plugin-import & eslint-plugin-unused-imports`

它被默认包含进了以上所有配置中

```js
//.eslintrc.js
module.exports = {
  extends: ["plugin:usagisah/base"],
  ignorePatterns: [".eslintrc.js"]
}
```

## Prettier

这里对`prettier`进行了默认配置，如果您有自己配置可以自行添加属于自己的`prettier`配置文件，该配置会自动查找对默认配置进行覆盖

该配置不包含除`prettier`默认配置其他任何配置

```js
//.eslintrc.js
module.exports = {
  extends: ["plugin:usagisah/prettier"],
  ignorePatterns: [".eslintrc.js"]
}
```

