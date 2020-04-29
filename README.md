# archiver-webpack-plugin
用于压缩目录的webpack插件

## 安装
````bash
npm install --save-dev archiver-webpack-plugin
````

## 使用
`webpack.config.js`
````
const ArchiverWebpackPlugin = require("archiver-webpack-plugin");

module.exports = {
  plugins: [
    new ArchiverPlugin({
      format: "zip"
    })
  ]
}
````

## 参数说明
