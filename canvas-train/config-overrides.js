const {
  override,
  fixBabelImports,
  addWebpackAlias
} = require('customize-cra');

const path = require("path");

module.exports = override(
  // 按需加载antd
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es',
    style: 'css',
  }),
  // 别名配置
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "./src"),
    ["@components"]: path.resolve(__dirname, "./src/components")
  })
);

