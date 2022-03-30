/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    require.resolve("./typescript.js"),
    require.resolve("./react.js"),
    require.resolve("./vue3.js"),
    require.resolve("./prettier.js")
  ]
}
